import React from 'react';
/**
 * Builds a component tree by wrapping the input components with the provided props.
 *
 * @param componentWithProps - An array of components with their corresponding props.
 * @returns A new component that wraps the input components with the provided props.
 *
 * @example
 * const MyComponent = buildProvidersTree([
 *   [Provider1, { prop1: 'value1' }],
 *   [Provider2, { prop2: 'value2' }],
 * ]);
 *
 * <MyComponent>
 *   <ChildComponent />
 * </MyComponent>
 *
 */

export const buildProvidersTree = (componentWithProps: any[]) => {
  const initialComponent = ({children}: {children: React.ReactNode}) => (
    <>{children}</>
  );
  return componentWithProps.reduce(
    (AccumulatedComponents: any, [Provider, props = {}]: any) => {
      return ({children}: {children: React.ReactNode}) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent,
  );
};
