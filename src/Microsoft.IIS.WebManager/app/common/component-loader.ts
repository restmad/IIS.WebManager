import {
    ModuleDefinition,
    WebSiteListComponentName,
    AppPoolComponentName,
    WebFilesComponentName,
    WebAppListComponentName,
    VdirListComponentName,
    AuthenticationComponentName,
    AuthorizationComponentName,
    CertificatesComponentName,
    CentralCertificateComponentName,
    DefaultDocumentsComponentName,
    DirectoryBrowsingComponentName,
    IpRestrictionsComponentName,
    LoggingComponentName,
    MimeMapsComponentName,
    MonitoringComponentName,
    ModulesComponentName,
    CompressionComponentName,
    RequestFilteringComponentName,
    HttpResponseHeadersComponentName,
    RequestTracingComponentName,
    StaticContentComponentName,
    UrlRewriteComponentName } from "../main/settings";

export class ComponentLoader {

    public static LoadAsync(name, module: ModuleDefinition) {
        switch (module.component_name) {
            case WebSiteListComponentName:
                return import('../webserver/websites/websites.module').then(m => {return m[name]})

            case AppPoolComponentName:
                return import('../webserver/app-pools/app-pools.module').then(m => {return m[name]})

            case WebFilesComponentName:
                return import('../webserver/files/webfiles.module').then(m => {return m[name]})

            case WebAppListComponentName:
                return import('../webserver/webapps/webapps.module').then(m => {return m[name]})

            case VdirListComponentName:
                return import('../webserver/vdirs/vdirs.module').then(m => {return m[name]})

            case AuthenticationComponentName:
                return import('../webserver/authentication/authentication.module').then(m => {return m[name]})

            case AuthorizationComponentName:
                return import('../webserver/authorization/authorization.module').then(m => {return m[name]})

            case CertificatesComponentName:
                return import('../certificates/certificates.module').then(m => {return m[name]})

            case CentralCertificateComponentName:
                return import('../webserver/central-certificates/central-certificate.module').then(m => {return m[name]})

            case DefaultDocumentsComponentName:
                return import('../webserver/default-documents/default-documents.module').then(m => {return m[name]})

            case DirectoryBrowsingComponentName:
                return import('../webserver/directory-browsing/directory-browsing.module').then(m => {return m[name]})

            case IpRestrictionsComponentName:
                return import('../webserver/ip-restrictions/ip-restrictions.module').then(m => {return m[name]})

            case LoggingComponentName:
                return import('../webserver/logging/logging.module').then(m => {return m[name]})

            case MimeMapsComponentName:
                return import('../webserver/mime-maps/mime-maps.module').then(m => {return m[name]})

            case MonitoringComponentName:
                return import('../webserver/monitoring/monitoring.module').then(m => {return m[name]})

            case ModulesComponentName:
                return import('../webserver/modules/modules.module').then(m => {return m[name]})

            case CompressionComponentName:
                return import('../webserver/compression/compression.module').then(m => {return m[name]})

            case RequestFilteringComponentName:
                return import('../webserver/request-filtering/request-filtering.module').then(m => {return m[name]})

            case HttpResponseHeadersComponentName:
                return import('../webserver/http-response-headers/http-response-headers.module').then(m => {return m[name]})

            case RequestTracingComponentName:
                return import('../webserver/request-tracing/request-tracing.module').then(m => {return m[name]})

            case StaticContentComponentName:
                return import('../webserver/static-content/static-content.module').then(m => {return m[name]})

            case UrlRewriteComponentName:
                return import('../webserver/url-rewrite/url-rewrite.module').then(m => {return m[name]})

            default:
                throw new Error("Cannot load module " + JSON.stringify(module))
        }

    }
}
