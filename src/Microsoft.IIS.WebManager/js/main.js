(function () {
    //
    // angulartics
    window.ga = null;
    window._gaq = null;

    // Activate loading indicator
    $(document).ready(function () {
        window.setTimeout(function () {
            $(".loader").addClass("active");
        }, 1)
    });

    $.get('./package.json?v=' + SETTINGS.version, function (appData) {

        function ver(name) {

            if (appData.dependencies != null && appData.dependencies[name]) {
                return appData.dependencies[name];
            }

            return '0.0.0';
        }

        SystemJS.config({
            defaultJSExtensions: true,
            map: {

                // angular bundles
                '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js?v=' + ver('@angular/core'),
                '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js?v=' + ver('@angular/common'),
                '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js?v=' + ver('@angular/compiler'),
                '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js?v=' + ver('@angular/platform-browser'),
                '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js?v=' + ver('@angular/platform-browser-dynamic'),
                '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js?v=' + ver('@angular/http'),
                '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js?v=' + ver('@angular/router'),
                '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js?v=' + ver('@angular/forms'),
                '@angular/upgrade': 'node_modules/@angular/upgrade/bundles/upgrade.umd.js?v=' + ver('@angular/upgrade'),


                'chart.js': 'node_modules/chart.js/dist/chart.min.js?v=' + ver('@angular/upgrade'),
                'ng2-charts': 'node_modules/ng2-charts/charts/charts.js?v=' + ver('@angular/upgrade'),

                // other libraries
                'angulartics2': 'node_modules/angulartics2',
                'rxjs': 'node_modules/rxjs',
                'ts': 'node_modules/plugin-typescript@4.0.10/lib/plugin.js?v=' + ver('ts'),
                'typescript': 'node_modules/typescript@2.0.2/lib/typescript.js?v=' + ver('typescript')
            },
            packages: {
                defaultExtension: 'js',
                app: {
                    format: 'cjs',
                    defaultExtension: 'js?v=' + SETTINGS.version
                },
                angulartics2: {
                    main: 'index',
                    defaultExtension: 'js?v=' + ver('angulartics2')
                },
                rxjs: {
                    defaultExtension: 'js?v=' + ver('rxjs')
                }
            }
        });

        System.import('app/main/main').catch(function (err) {
            console.error(err);
        });
    });
})();