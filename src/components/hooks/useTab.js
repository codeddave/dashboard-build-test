import { useState, useCallback } from "react";

export function useTabs(initialValue) {
  const [tab, setTab] = useState(initialValue);

  const onTabClick = useCallback((_tab) => {
    setTab(_tab);
  }, []);

  return {
    tab,
    onTabClick,
  };
}
