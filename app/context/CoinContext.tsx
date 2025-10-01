"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Coin = {
  id: string;
  currency_code: string;
  en_name: string;
  fa_name: string;
  price: string;
  buy_irt_price: string;
  sell_irt_price: string;
  daily_change_percent: string;
  icon: string;
  about: string;
};

type CoinContextType = {
  coins: Coin[];
  loading: boolean;
};

const CoinContext = createContext<CoinContextType>({
  coins: [],
  loading: true,
});

export function CoinProvider({ children }: { children: ReactNode }) {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // یک بار کوین‌ها رو از API بگیر
    fetch("https://b.wallet.ir/api/coins") // این رو با مسیر درست API خودت جایگزین کن
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.items || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <CoinContext.Provider value={{ coins, loading }}>
      {children}
    </CoinContext.Provider>
  );
}

export function useCoinContext() {
  return useContext(CoinContext);
}
