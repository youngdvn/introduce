import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns true once mounted on the client, false during SSR.
 * Uses useSyncExternalStore to avoid hydration mismatch and avoid cascading renders in React 19.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
