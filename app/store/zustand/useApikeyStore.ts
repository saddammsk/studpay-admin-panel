import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type KeyStatus = "active" | "inactive" | "expired";
export type KeyEnvironment = "production" | "sandbox" | "staging";

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  clientSecret: string;
  environment: KeyEnvironment;
  status: KeyStatus;
  createdAt: string;
  lastUsed: string | null;
  expiresAt: string | null;
  permissions: string[];
}

export interface GenerateKeyFormData {
  name: string;
  environment: KeyEnvironment;
  expiresAt: string;
  permissions: string[];
}

interface ApiKeyState {
  keys: ApiKey[];
  isGenerateModalOpen: boolean;
  isViewModalOpen: boolean;
  isDeleteModalOpen: boolean;
  selectedKey: ApiKey | null;
  isLoading: boolean;
  formData: GenerateKeyFormData;

  // Actions
  openGenerateModal: () => void;
  closeGenerateModal: () => void;
  openViewModal: (key: ApiKey) => void;
  closeViewModal: () => void;
  openDeleteModal: (key: ApiKey) => void;
  closeDeleteModal: () => void;
  setFormData: (data: Partial<GenerateKeyFormData>) => void;
  resetFormData: () => void;
  generateKey: () => Promise<ApiKey>;
  deleteKey: (id: string) => void;
  toggleKeyStatus: (id: string) => void;
  copyToClipboard: (text: string) => void;
}

const defaultFormData: GenerateKeyFormData = {
  name: "",
  environment: "production",
  expiresAt: "",
  permissions: ["read"],
};

const generateRandomKey = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const prefix = "gf_live_";
  let result = prefix;
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const generateSecret = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const prefix = "cs_";
  let result = prefix;
  for (let i = 0; i < 48; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const mockInitialKeys: ApiKey[] = [
  {
    id: "1",
    name: "Production API Key",
    key: "gf_live_Abc123XYZ789productionkey0001",
    clientSecret: "cs_production_secret_key_example_0001",
    environment: "production",
    status: "active",
    createdAt: "2024-11-15",
    lastUsed: "2025-03-12",
    expiresAt: "2026-11-15",
    permissions: ["read", "write", "delete"],
  },
  {
    id: "2",
    name: "Sandbox Testing Key",
    key: "gf_live_Def456UVW012sandboxtestkey0002",
    clientSecret: "cs_sandbox_secret_key_example_0002",
    environment: "sandbox",
    status: "active",
    createdAt: "2025-01-20",
    lastUsed: "2025-03-10",
    expiresAt: null,
    permissions: ["read", "write"],
  },
  {
    id: "3",
    name: "Staging Integration",
    key: "gf_live_Ghi789RST345stagingintkey0003",
    clientSecret: "cs_staging_secret_key_example_0003",
    environment: "staging",
    status: "inactive",
    createdAt: "2024-09-05",
    lastUsed: "2024-12-01",
    expiresAt: "2025-09-05",
    permissions: ["read"],
  },
  {
    id: "4",
    name: "Legacy Integration Key",
    key: "gf_live_Jkl012OPQ678legacyintkey0004",
    clientSecret: "cs_legacy_secret_key_example_0004",
    environment: "production",
    status: "expired",
    createdAt: "2023-06-01",
    lastUsed: "2024-06-01",
    expiresAt: "2024-06-01",
    permissions: ["read", "write"],
  },
];

export const useApiKeyStore = create<ApiKeyState>()(
  devtools(
    (set, get) => ({
      keys: mockInitialKeys,
      isGenerateModalOpen: false,
      isViewModalOpen: false,
      isDeleteModalOpen: false,
      selectedKey: null,
      isLoading: false,
      formData: { ...defaultFormData },

      openGenerateModal: () => set({ isGenerateModalOpen: true }),
      closeGenerateModal: () => {
        set({ isGenerateModalOpen: false });
        get().resetFormData();
      },

      openViewModal: (key) => set({ isViewModalOpen: true, selectedKey: key }),
      closeViewModal: () => set({ isViewModalOpen: false, selectedKey: null }),

      openDeleteModal: (key) =>
        set({ isDeleteModalOpen: true, selectedKey: key }),
      closeDeleteModal: () =>
        set({ isDeleteModalOpen: false, selectedKey: null }),

      setFormData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),

      resetFormData: () => set({ formData: { ...defaultFormData } }),

      generateKey: async () => {
        set({ isLoading: true });
        // Simulate API call delay
        await new Promise((res) => setTimeout(res, 1200));

        const { formData } = get();
        const newKey: ApiKey = {
          id: Date.now().toString(),
          name: formData.name || "New API Key",
          key: generateRandomKey(),
          clientSecret: generateSecret(),
          environment: formData.environment,
          status: "active",
          createdAt: new Date().toISOString().split("T")[0],
          lastUsed: null,
          expiresAt: formData.expiresAt || null,
          permissions: formData.permissions,
        };

        set((state) => ({
          keys: [newKey, ...state.keys],
          isLoading: false,
          isGenerateModalOpen: false,
          selectedKey: newKey,
          isViewModalOpen: true,
        }));

        get().resetFormData();
        return newKey;
      },

      deleteKey: (id) =>
        set((state) => ({
          keys: state.keys.filter((k) => k.id !== id),
          isDeleteModalOpen: false,
          selectedKey: null,
        })),

      toggleKeyStatus: (id) =>
        set((state) => ({
          keys: state.keys.map((k) =>
            k.id === id
              ? { ...k, status: k.status === "active" ? "inactive" : "active" }
              : k
          ),
        })),

      copyToClipboard: (text) => {
        navigator.clipboard.writeText(text);
      },
    }),
    { name: "api-key-store" }
  )
);