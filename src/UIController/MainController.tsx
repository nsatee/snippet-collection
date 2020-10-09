import React from "react";
type SectionType = {
  title: string;
  description: string;
};

const initState = {
  isEmpty: true,
  descData: null,
  readMode: true,
  changed: true,
  headerRef: null,
  editing: false,
  data: undefined,
};

type StateType = {
  isEmpty?: boolean;
  editing?: boolean;
  descData?: string | null;
  readMode?: boolean;
  changed?: boolean;
  headerRef?: React.RefObject<HTMLHeadingElement> | null;
  deletingActive?: boolean;
  data?: SectionType;
};

type HookType = [StateType, (value: StateType) => void];
const Context = React.createContext<HookType>([initState, () => {}]);
export const MainUIProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<StateType>(initState);
  const setUI = React.useCallback(
    (value: StateType) =>
      setState((prev) => ({
        ...prev,
        ...value,
      })),
    []
  );
  const value = React.useMemo<HookType>(() => [state, setUI], [state, setUI]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useMainUI = () => React.useContext(Context);

export default initState;
