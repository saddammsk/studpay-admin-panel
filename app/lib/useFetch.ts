export interface Stat {
  id: string;
  title: string;
  value: string | number;
  change: string;
  changeColor?: string;
  icon: string;
}

export async function fetchData<T = any>(endpoint: string): Promise<T[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, {
      cache: "no-store",
    });

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
