"use client";

import { useState, useRef, useEffect, useCallback, FC, ReactNode, ChangeEvent } from "react";
import {
  useSettingsStore,
  BrandAssetKey,
  NotificationKey,
} from "@/app/store/zustand/Usesettingsstore";

const COLOR_PRESETS: { id: string; hex: string; label: string }[] = [
  { id: "blue",    hex: "#2563EB", label: "Blue"    },
  { id: "indigo",  hex: "#4F46E5", label: "Indigo"  },
  { id: "violet",  hex: "#7C3AED", label: "Violet"  },
  { id: "emerald", hex: "#059669", label: "Emerald" },
  { id: "rose",    hex: "#E11D48", label: "Rose"    },
  { id: "amber",   hex: "#D97706", label: "Amber"   },
  { id: "cyan",    hex: "#0891B2", label: "Cyan"    },
  { id: "slate",   hex: "#475569", label: "Slate"   },
];

const CURRENCIES: string[] = [
  "USD - US Dollar ($)", "EUR - Euro (€)", "GBP - British Pound (£)",
  "JPY - Japanese Yen (¥)", "PKR - Pakistani Rupee (₨)", "AED - UAE Dirham (د.إ)",
  "CAD - Canadian Dollar (C$)", "AUD - Australian Dollar (A$)",
];

const TIMEZONES: string[] = [
  "UTC (GMT+0)", "Europe/London (GMT+0)", "Europe/Paris (GMT+1)",
  "America/New_York (GMT-5)", "America/Los_Angeles (GMT-8)",
  "Asia/Karachi (GMT+5)", "Asia/Dubai (GMT+4)", "Asia/Tokyo (GMT+9)",
];

const LANGUAGES: string[] = [
  "English", "French", "Spanish", "German", "Arabic", "Urdu", "Japanese",
];

const NOTIF_ROWS: { key: string; label: string; desc: string }[] = [
  { key: "transaction", label: "Transaction Alerts", desc: "Deposits, withdrawals & transfers" },
  { key: "kyc",         label: "KYC / Compliance",   desc: "Verification status updates"       },
  { key: "security",    label: "Security Events",    desc: "Login attempts & password changes" },
  { key: "marketing",   label: "Marketing & Promos", desc: "Offers, newsletters & updates"     },
];

const pwStrength = (v: string): number => {
  if (!v) return 0;
  return [
    v.length >= 8,
    /[A-Z]/.test(v),
    /[0-9]/.test(v),
    /[^A-Za-z0-9]/.test(v),
  ].filter(Boolean).length;
};

interface ToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

const Toggle: FC<ToggleProps> = ({ enabled, onToggle }) => (
  <button
    type="button"
    role="switch"
    aria-checked={enabled}
    onClick={onToggle}
    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
      enabled ? "bg-blue-600" : "bg-gray-200"
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
        enabled ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

interface SectionLabelProps {
  text: string;
}

const SectionLabel: FC<SectionLabelProps> = ({ text }) => (
  <div className="flex items-center gap-2">
    <span className="w-1 h-4 bg-blue-600 rounded-full" />
    <span className="text-sm text-gray-500">{text}</span>
  </div>
);

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white border border-gray-100 rounded-2xl shadow-sm ${className}`}>
    {children}
  </div>
);

interface CardHeaderProps {
  iconEl: ReactNode;
  title: string;
  subtitle: string;
}

const CardHeader: FC<CardHeaderProps> = ({ iconEl, title, subtitle }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="bg-blue-50 rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
      {iconEl}
    </div>
    <div className="min-w-0">
      <p className="text-sm font-semibold text-gray-900 leading-5">{title}</p>
      <p className="text-sm text-gray-400 leading-5">{subtitle}</p>
    </div>
  </div>
);

interface FieldErrorProps {
  msg?: string | null;
}

const FieldError: FC<FieldErrorProps> = ({ msg }) => {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5">
      <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {msg}
    </p>
  );
};

interface PasswordInputProps {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string | null;
  touched?: boolean;
}

const PasswordInput: FC<PasswordInputProps> = ({
  placeholder, value, onChange, onBlur, error, touched,
}) => {
  const [show, setShow] = useState(false);
  const hasErr = touched && !!error;

  return (
    <div>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full rounded-xl pl-3 pr-10 py-2.5 text-sm border outline-none transition-all bg-gray-50 focus:bg-white ${
            hasErr
              ? "border-red-300 focus:ring-2 focus:ring-red-100"
              : "border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          }`}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          {show ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      </div>
      {touched && <FieldError msg={error} />}
    </div>
  );
};

interface SelectInputProps {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  hasError?: boolean;
}

const SelectInput: FC<SelectInputProps> = ({ value, onChange, options, hasError }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      className={`w-full rounded-xl pl-3 pr-8 py-2.5 text-sm border outline-none transition-all appearance-none cursor-pointer bg-gray-50 focus:bg-white ${
        hasError
          ? "border-red-300 focus:ring-2 focus:ring-red-100"
          : "border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
      }`}
    >
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

interface ToastProps {
  message: string;
  onDone: () => void;
}

const Toast: FC<ToastProps> = ({ message, onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="flex items-center gap-2 mt-3 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm">
      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </div>
  );
};

const Spinner: FC = () => (
  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

interface PrimaryBtnProps {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  fullWidth?: boolean;
}

const PrimaryBtn: FC<PrimaryBtnProps> = ({ children, onClick, loading, fullWidth }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={loading}
    className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${
      fullWidth ? "w-full" : ""
    }`}
  >
    {loading && <Spinner />}
    {children}
  </button>
);

interface AssetSlotProps {
  label: string;
  subtitle: string;
  iconSvg: ReactNode;
  assetKey: BrandAssetKey;
}

const AssetSlot: FC<AssetSlotProps> = ({ label, subtitle, iconSvg, assetKey }) => {
  const { brandAssets, setBrandAsset } = useSettingsStore();
  const asset = brandAssets[assetKey];
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        setBrandAsset(assetKey, { url: ev.target?.result as string, name: file.name });
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    },
    [assetKey, setBrandAsset],
  );

  return (
    <div
      onClick={() => !asset && fileRef.current?.click()}
      className={`border-2 border-dashed rounded-xl min-h-[251px] flex flex-col justify-center items-center gap-3 transition-all duration-150 group ${
        asset
          ? "border-blue-200 bg-blue-50/30 cursor-default"
          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/20 cursor-pointer"
      }`}
    >
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      {asset ? (
        <>
          <img
            src={asset.url}
            alt={label}
            className="max-h-28 max-w-full object-contain rounded-lg px-4"
          />
          <p className="text-xs text-gray-400 px-3 text-center truncate max-w-full">{asset.name}</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); fileRef.current?.click(); }}
              className="text-xs text-blue-600 hover:underline font-medium"
            >
              Replace
            </button>
            <span className="text-gray-200">|</span>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setBrandAsset(assetKey, null); }}
              className="text-xs text-red-500 hover:underline font-medium"
            >
              Remove
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 group-hover:bg-blue-100 transition-colors">
            {iconSvg}
          </div>
          <div className="text-center px-3">
            <p className="text-sm text-gray-700">{label}</p>
            <p className="text-xs text-gray-400 leading-4">{subtitle}</p>
          </div>
          <p className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to upload
          </p>
        </>
      )}
    </div>
  );
};

const BrandAssetsSection: FC = () => {
  const slots: { key: BrandAssetKey; label: string; subtitle: string; iconSvg: ReactNode }[] = [
    {
      key: "logoLight",
      label: "Main Logo",
      subtitle: "Light Mode",
      iconSvg: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      key: "logoDark",
      label: "Main Logo",
      subtitle: "Dark Mode",
      iconSvg: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ),
    },
    {
      key: "favicon",
      label: "Favicon",
      subtitle: "32×32 px",
      iconSvg: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      key: "appIcon",
      label: "App Icon",
      subtitle: "Push Notifications",
      iconSvg: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Card className="p-6">
      <CardHeader
        iconEl={
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        }
        title="Brand Assets"
        subtitle="Upload your logo, favicon and app icon"
      />
      <div className="max-w-[1054px] grid grid-cols-2 md:grid-cols-4 gap-4">
         {slots.map((s) => (
            <AssetSlot
                key={s.key}             
                assetKey={s.key}          
                label={s.label}
                subtitle={s.subtitle}
                iconSvg={s.iconSvg}
            />
            ))}
      </div>
    </Card>
  );
};

const ColorPaletteSection: FC = () => {
  const { primaryColor, colorPreset, setPrimaryColor, setColorPreset } = useSettingsStore();

  return (
    <Card className="p-6">
      <CardHeader
        iconEl={
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        }
        title="Global Color Palette"
        subtitle="Set your primary brand color"
      />
      <div className="flex items-start flex-col md:flex-row gap-6">
        <div className="flex-1 w-full">
          <p className="text-xs font-medium text-gray-500 mb-3">Color Presets</p>
          <div className="flex flex-wrap gap-3 mb-5">
            {COLOR_PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                title={p.label}
                onClick={() => setColorPreset(p.id, p.hex)}
                className={`w-9 h-9 rounded-xl transition-all duration-150 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 ${
                  colorPreset === p.id ? "ring-2 ring-offset-2 ring-gray-400 scale-110" : ""
                }`}
                style={{ backgroundColor: p.hex }}
              />
            ))}
          </div>

          <p className="text-xs font-medium text-gray-500 mb-2">Custom Color</p>
          <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-gray-50 max-w-xs">
            <input
              type="color"
              value={primaryColor}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPrimaryColor(e.target.value)}
              className="w-9 h-8 rounded-lg border-0 bg-transparent p-0 cursor-pointer"
            />
            <input
              type="text"
              value={primaryColor}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) setPrimaryColor(e.target.value);
              }}
              className="flex-1 text-sm font-mono bg-transparent outline-none text-gray-700"
              placeholder="#2563EB"
              maxLength={7}
            />
            <div
              className="w-6 h-6 rounded-lg shadow-sm transition-colors duration-300"
              style={{ backgroundColor: primaryColor }}
            />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl shadow-md transition-colors duration-300"
              style={{ backgroundColor: primaryColor }}
            />
            <div>
              <p className="text-xs font-semibold text-gray-700">Active Brand Color</p>
              <p className="text-xs text-gray-400 font-mono">{primaryColor.toUpperCase()}</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-56 flex flex-col items-center">
          <div className="flex items-center gap-2 self-start mb-3">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <p className="text-xs text-gray-400">Live Preview</p>
          </div>
          <div className="w-44 bg-gray-100 rounded-2xl p-3 shadow-inner">
            <div className="rounded-xl overflow-hidden shadow" style={{ backgroundColor: primaryColor }}>
              <div className="p-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg mb-2" />
                <div className="h-2 bg-white/40 rounded w-3/4 mb-1" />
                <div className="h-2 bg-white/30 rounded w-1/2" />
              </div>
              <div className="bg-white mx-2 mb-2 rounded-lg p-2">
                <div className="h-1.5 rounded mb-1" style={{ backgroundColor: primaryColor, width: "60%", opacity: 0.5 }} />
                <div className="h-1.5 bg-gray-200 rounded w-4/5 mb-1" />
                <div className="h-1.5 bg-gray-100 rounded w-2/3" />
              </div>
              <div className="flex gap-1.5 px-2 pb-2">
                <div className="flex-1 h-6 bg-white/90 rounded-lg flex items-center justify-center">
                  <div className="h-1.5 w-8 rounded" style={{ backgroundColor: primaryColor }} />
                </div>
                <div className="w-8 h-6 bg-white/20 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

interface StrengthBarProps {
  password: string;
}

const StrengthBar: FC<StrengthBarProps> = ({ password }) => {
  const strength = pwStrength(password);
  const colors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-emerald-500"];
  const labels = ["Weak", "Fair", "Good", "Strong"];
  if (!password) return null;
  return (
    <div className="space-y-1.5 mt-2">
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < strength ? colors[strength - 1] : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      {strength > 0 && (
        <p className={`text-xs font-medium ${
          strength <= 1 ? "text-red-500" : strength === 2 ? "text-orange-500" : strength === 3 ? "text-yellow-600" : "text-emerald-600"
        }`}>
          {labels[strength - 1]} password
        </p>
      )}
    </div>
  );
};

const PasswordSection: FC = () => {
  const {
    pwForm, pwErrors, pwTouched, pwSuccess, pwLoading, setPwField, submitPassword,
  } = useSettingsStore();

  return (
    <div>
      <h6 className="text-sm font-semibold text-gray-900 mb-4">Change Password</h6>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Current Password</label>
          <PasswordInput
            placeholder="Enter current password"
            value={pwForm.current}
            onChange={(v) => setPwField("current", v)}
            onBlur={() => setPwField("current", pwForm.current)}
            error={pwErrors.current}
            touched={pwTouched.current}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">New Password</label>
          <PasswordInput
            placeholder="Enter new password"
            value={pwForm.newPw}
            onChange={(v) => setPwField("newPw", v)}
            onBlur={() => setPwField("newPw", pwForm.newPw)}
            error={pwErrors.newPw}
            touched={pwTouched.newPw}
          />
          <StrengthBar password={pwForm.newPw} />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Confirm Password</label>
          <PasswordInput
            placeholder="Confirm new password"
            value={pwForm.confirm}
            onChange={(v) => setPwField("confirm", v)}
            onBlur={() => setPwField("confirm", pwForm.confirm)}
            error={pwErrors.confirm}
            touched={pwTouched.confirm}
          />
        </div>
        <PrimaryBtn fullWidth loading={pwLoading} onClick={submitPassword}>
          Update Password
        </PrimaryBtn>
        {pwSuccess && (
          <Toast
            message="Password updated successfully!"
            onDone={() => useSettingsStore.setState({ pwSuccess: false })}
          />
        )}
      </div>
    </div>
  );
};

const TwoFactorSection: FC = () => {
  const { twoFactor, setTwoFactor } = useSettingsStore();

  return (
    <div>
      <h6 className="text-sm font-semibold text-gray-900 mb-4">Two-Factor Authentication</h6>
      <div className="border border-gray-100 rounded-xl p-5 mb-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-xl shrink-0">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <p className="text-sm font-medium text-gray-900">Biometric / 2FA</p>
              <Toggle enabled={twoFactor} onToggle={() => setTwoFactor(!twoFactor)} />
            </div>
            <p className="text-sm text-gray-400">
              {twoFactor
                ? "Your account is protected with two-factor authentication"
                : "Enable 2FA to secure your account"}
            </p>
          </div>
        </div>
        {twoFactor && (
          <div className="border-t border-gray-100 mt-4 pt-4 space-y-2.5">
            {["Authenticator app configured", "Recovery codes generated"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-emerald-600">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border border-gray-100 rounded-xl p-5">
        <p className="text-xs text-gray-400">Last Login</p>
        <p className="text-sm font-medium text-gray-900 mt-0.5">Today at 09:42 AM</p>
        <p className="text-xs text-gray-400 mt-0.5">Chrome on macOS · London, UK</p>
      </div>
    </div>
  );
};

const SecuritySection: FC = () => (
  <Card className="p-6">
    <CardHeader
      iconEl={
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      }
      title="My Security"
      subtitle="Manage your account security settings"
    />
    <div className="grid md:grid-cols-2 gap-8">
      <PasswordSection />
      <TwoFactorSection />
    </div>
  </Card>
);

interface SystemToggleRowProps {
  iconSvg: ReactNode;
  title: string;
  desc: string;
  enabled: boolean;
  onToggle: () => void;
  warnMsg?: string;
}

const SystemToggleRow: FC<SystemToggleRowProps> = ({
  iconSvg, title, desc, enabled, onToggle, warnMsg,
}) => (
  <div className={`border rounded-xl p-5 transition-colors ${
    enabled && warnMsg ? "border-amber-200 bg-amber-50/40" : "border-gray-100"
  }`}>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl shrink-0">
        {iconSvg}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
          </div>
          <Toggle enabled={enabled} onToggle={onToggle} />
        </div>
      </div>
    </div>
    {enabled && warnMsg && (
      <div className="mt-3 flex items-center gap-2 text-xs text-amber-700 bg-amber-100 rounded-lg px-3 py-2">
        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        {warnMsg}
      </div>
    )}
  </div>
);

const RegionalSection: FC = () => {
  const {
    regional, regionalErrors, regionalTouched, regionalSuccess,
    regionalLoading, setRegionalField, submitRegional,
  } = useSettingsStore();

  const fields: { key: keyof typeof regional; label: string; options: string[] }[] = [
    { key: "currency", label: "Default Currency", options: CURRENCIES },
    { key: "timezone", label: "Timezone",          options: TIMEZONES  },
    { key: "language", label: "Default Language",  options: LANGUAGES  },
  ];

  return (
    <div>
      <h6 className="text-sm font-semibold text-gray-900 mb-4">Regional Defaults</h6>
      <div className="space-y-4">
        {fields.map(({ key, label, options }) => (
          <div key={key} className="border border-gray-100 rounded-xl p-4">
            <label className="block text-xs font-medium text-gray-600 mb-1.5">{label}</label>
            <SelectInput
              value={regional[key]}
              onChange={(v) => setRegionalField(key, v)}
              options={options}
              hasError={!!(regionalTouched[key] && regionalErrors[key])}
            />
            {regionalTouched[key] && <FieldError msg={regionalErrors[key]} />}
          </div>
        ))}
        <PrimaryBtn fullWidth loading={regionalLoading} onClick={submitRegional}>
          Save Regional Settings
        </PrimaryBtn>
        {regionalSuccess && (
          <Toast
            message="Regional settings saved!"
            onDone={() => useSettingsStore.setState({ regionalSuccess: false })}
          />
        )}
      </div>
    </div>
  );
};

const SystemConfigSection: FC = () => {
  const { maintenance, registrations, autoKyc, setMaintenance, setRegistrations, setAutoKyc } =
    useSettingsStore();

  const toggles: SystemToggleRowProps[] = [
    {
      iconSvg: (
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Maintenance Mode",
      desc: "Take app offline temporarily",
      enabled: maintenance,
      onToggle: () => setMaintenance(!maintenance),
      warnMsg: "App is currently offline for all users.",
    },
    {
      iconSvg: (
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
      title: "New Registrations",
      desc: "Allow new user sign-ups",
      enabled: registrations,
      onToggle: () => setRegistrations(!registrations),
    },
    {
      iconSvg: (
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Auto-KYC Approval",
      desc: "Automatically approve verified KYC",
      enabled: autoKyc,
      onToggle: () => setAutoKyc(!autoKyc),
    },
  ];

  return (
    <Card className="p-6">
      <CardHeader
        iconEl={
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
        title="System Configuration"
        subtitle="Operational status and regional defaults"
      />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h6 className="text-sm font-semibold text-gray-900 mb-4">Operational Status</h6>
          <div className="space-y-4">
            {toggles.map((t) => (
              <SystemToggleRow key={t.title} {...t} />
            ))}
          </div>
        </div>
        <RegionalSection />
      </div>
    </Card>
  );
};

interface NotifCellProps {
  rowKey: string;
  channel: string;
}

const NotifCell: FC<NotifCellProps> = ({ rowKey, channel }) => {
  const { notifications, toggleNotif } = useSettingsStore();
  const key = `${rowKey}_${channel}` as NotificationKey;
  return (
    <td className="py-4 text-center">
      <div className="flex justify-center">
        <Toggle enabled={notifications[key]} onToggle={() => toggleNotif(key)} />
      </div>
    </td>
  );
};

const NotificationsSection: FC = () => (
  <Card className="p-6">
    <CardHeader
      iconEl={
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      }
      title="Communication & Notifications"
      subtitle="Configure system email and notification settings"
    />
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left pb-3 text-xs font-medium text-gray-400 w-1/2 pr-4">
              Notification Type
            </th>
            {["Email", "Push", "SMS"].map((ch) => (
              <th key={ch} className="pb-3 text-xs font-medium text-gray-400 text-center">{ch}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {NOTIF_ROWS.map(({ key, label, desc }) => (
            <tr key={key} className="hover:bg-gray-50/50 transition-colors">
              <td className="py-4 pr-4">
                <p className="font-medium text-gray-800 text-sm">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
              </td>
              {["email", "push", "sms"].map((ch) => (
                <NotifCell key={ch} rowKey={key} channel={ch} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

export default function SettingsPage() {
  return (
    <div className="bg-gray-50 -m-4 md:-m-8 p-4 md:p-6">
      <div className="mx-auto space-y-8">

        <div className="space-y-6">
          <SectionLabel text="Visual Identity & Branding" />
          <BrandAssetsSection />
          <ColorPaletteSection />
        </div>

        <div className="space-y-6">
          <SectionLabel text="Personal Account & Security" />
          <SecuritySection />
        </div>

        <div className="space-y-6">
          <SectionLabel text="General System Configuration" />
          <SystemConfigSection />
        </div>

        <div className="space-y-6">
          <SectionLabel text="Communication & Notifications" />
          <NotificationsSection />
        </div>

      </div>
    </div>
  );
}