import { createContext } from "react";
import MoralisType from "moralis";
import {
  AuthenticateOptions,
  Authentication,
  Login,
  Signup,
} from "../../hooks/core/useMoralis/_useMoralisAuth";
import { SetUserData } from "../../hooks/core/useMoralis/utils/setUserData";
import { Web3EnableOptions } from "../../hooks/core/useMoralis/_useMoralisWeb3";
import { Environment } from "../../hooks/core/useMoralis/_useMoralisInit";

export interface AuthError extends Error {
  code: number;
}

export interface MoralisContextValue {
  Moralis: MoralisType;
  environment: Environment;

  isInitialized: boolean;
  isInitializing: boolean;

  authenticate: (options?: AuthenticateOptions) => Promise<void>;
  logout: () => Promise<void>;
  signup: Signup;
  login: Login;

  auth: Authentication;
  authError: AuthError | null;
  isAuthenticated: boolean;
  isUnauthenticated: boolean;
  isAuthenticating: boolean;
  hasAuthError: boolean;
  isLoggingOut: boolean;
  isAuthUndefined: boolean;

  setUserData: (data: SetUserData) => Promise<void>;
  user: MoralisType.User | null;
  _setUser: (user: MoralisType.User) => void;
  userError: null | Error;
  isUserUpdating: boolean;
  refetchUserData: () => Promise<void>;

  account: null | string;
  chainId: null | string;

  enableWeb3: (options?: Web3EnableOptions) => void;
  web3: MoralisType.Web3 | null;
  isWeb3Enabled: boolean;
  web3EnableError: Error | null;
  isWeb3EnableLoading: boolean;
}

export const MoralisContext = createContext<null | MoralisContextValue>(null);
