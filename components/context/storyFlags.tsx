import React, { createContext, useContext, useState } from "react";

type StoryFlags = { [key: string]: any };

const StoryFlagsContext = createContext<{
  flags: StoryFlags;
  setFlag: (key: string, value: any) => void;
}>({
  flags: {},
  setFlag: () => {},
});

export const useStoryFlags = () => useContext(StoryFlagsContext);

export const StoryFlagsProvider = ({ children }: { children: React.ReactNode }) => {
  const [flags, setFlags] = useState<StoryFlags>({});

  const setFlag = (key: string, value: any) => {
    setFlags((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <StoryFlagsContext.Provider value={{ flags, setFlag }}>
      {children}
    </StoryFlagsContext.Provider>
  );
};
