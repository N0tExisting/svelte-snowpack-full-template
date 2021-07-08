import * as webpack from "webpack";

// Remove the Old Webpack 1 types to ensure that we are only using Webpack 2 syntax.

export type INewLoader = string | webpack.NewLoader;

export interface INewLoaderRule extends webpack.NewLoaderRule {
  loader: INewLoader;
  oneOf?: INewRule[];
  rules?: INewRule[];
}

export interface INewUseRule extends webpack.NewUseRule {
  oneOf?: INewRule[];
  rules?: INewRule[];
  use: INewLoader | INewLoader[];
}

export interface INewRulesRule extends webpack.RulesRule {
  oneOf?: INewRule[];
  rules: INewRule[];
}

export interface INewOneOfRule extends webpack.OneOfRule {
  oneOf: INewRule[];
  rules?: INewRule[];
}

export type INewRule = INewLoaderRule | INewUseRule | INewRulesRule | INewOneOfRule;

export interface INewModule extends webpack.NewModule {
  rules: INewRule[];
}

export interface INewConfiguration extends webpack.Configuration {
  module?: INewModule;
}

export interface IArguments {
  prod: boolean;
}

export type INewConfigurationBuilder = (env: IArguments) => INewConfiguration;

export default INewConfigurationBuilder | INewConfiguration;
