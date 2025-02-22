import type { BuilderPlugin } from '../types';
import {
  setConfig,
  applyBuilderResolvePlugin,
} from '@modern-js/builder-shared';

export const builderPluginResolve = (): BuilderPlugin => ({
  name: 'builder-plugin-resolve',

  setup(api) {
    applyBuilderResolvePlugin(api);

    api.modifyRspackConfig(async (rspackConfig, { isServer }) => {
      const isTsProject = Boolean(api.context.tsconfigPath);

      if (isTsProject) {
        setConfig(
          rspackConfig,
          'resolve.tsConfigPath',
          api.context.tsconfigPath,
        );
      }

      if (isServer) {
        // FIXME:
        // When targe = node, we no need to specify conditionsNames.
        // We gueess the webpack would auto specify refrence to target.
        // Rspack has't the action, so we need manually specify.
        const nodeConditionNames = ['require', 'node'];
        setConfig(rspackConfig, 'resolve.conditionNames', nodeConditionNames);
      }
    });
  },
});
