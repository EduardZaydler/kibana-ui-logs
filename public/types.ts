import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface KibanaSearchLoggerPluginSetup {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface KibanaSearchLoggerPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
