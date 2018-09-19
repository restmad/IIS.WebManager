export var SETTINGS : { [key:string]: string} = {
    "version": "2.2.2",
    "api_version": "2.2.0",
    "api_setup_version": "2.2.0",
    "api_download_url": "http://go.microsoft.com/fwlink/?LinkId=829373",
    "ga_track": "UA-XXXXXXXX-X",
}

export class ModuleDefinition {
    constructor(public name: string, public ico: string, public component_name: string, public api_name: string, public api_path: string) {}
}

export const WebSiteListComponentName = "WebSiteListComponent"
export const AppPoolComponentName = "AppPoolListComponent"
export const WebFilesComponentName = "WebFilesComponent"
export const WebAppListComponentName = "WebAppListComponent"
export const VdirListComponentName = "VdirListComponent"
export const AuthenticationComponentName = "AuthenticationComponent"
export const AuthorizationComponentName = "AuthorizationComponent"
export const CertificatesComponentName = "CertificatesComponent"
export const CentralCertificateComponentName = "CentralCertificateComponent"
export const DefaultDocumentsComponentName = "DefaultDocumentsComponent"
export const DirectoryBrowsingComponentName = "DirectoryBrowsingComponent"
export const IpRestrictionsComponentName = "IpRestrictionsComponent"
export const LoggingComponentName = "LoggingComponent"
export const MimeMapsComponentName = "MimeMapsComponent"
export const MonitoringComponentName = "MonitoringComponent"
export const ModulesComponentName = "ModulesComponent"
export const CompressionComponentName = "CompressionComponent"
export const RequestFilteringComponentName = "RequestFilteringComponent"
export const HttpResponseHeadersComponentName = "HttpResponseHeadersComponent"
export const RequestTracingComponentName = "RequestTracingComponent"
export const StaticContentComponentName = "StaticContentComponent"
export const UrlRewriteComponentName = "UrlRewriteComponent"

export var GLOBAL_MODULES: ModuleDefinition[] = [
    new ModuleDefinition("Web Sites", "fa fa-globe", WebSiteListComponentName, "websites", "/api/webserver/websites?application_pool.id={appPoolId}"),
    new ModuleDefinition("Application Pools", "fa fa-cogs", AppPoolComponentName, "app_pools", "/api/webserver/application-pools"),
    new ModuleDefinition("Files", "fa fa-files-o", WebFilesComponentName, "files", "/api/webserver/files/{id}"),
    new ModuleDefinition("Web Applications", "fa fa-code", WebAppListComponentName, "webapps", "/api/webserver/webapps?website.id={websiteid}&application_pool.id={apppoolid}"),
    new ModuleDefinition("Virtual Directories", "fa fa-folder-o", VdirListComponentName, "vdirs", "/api/webserver/virtual-directories?website.id={siteId}&webapp.id={appId}"),
    new ModuleDefinition("Authentication", "fa fa-sign-in", AuthenticationComponentName, "authentication", "/api/webserver/authentication/{id}"),
    new ModuleDefinition("Authorization", "fa fa-user-o", AuthorizationComponentName, "authorization", "/api/webserver/authorization/{id}"),
    new ModuleDefinition("Certificates", "fa fa-lock", CertificatesComponentName, "certificates", "/api/certificates"),
    new ModuleDefinition("Central Certificate Store", "fa fa-certificate", CentralCertificateComponentName, "central_certificates", "/api/webserver/centralized-certificates/{id}"),
    new ModuleDefinition("Default Documents", "fa fa-file-text-o", DefaultDocumentsComponentName, "default_document", "/api/webserver/default-documents/{id}"),
    new ModuleDefinition("Directory Browsing", "fa fa-folder-open-o", DirectoryBrowsingComponentName, "directory_browsing", "/api/webserver/directory-browsing/{id}"),
    new ModuleDefinition("IP Restrictions", "fa fa-ban", IpRestrictionsComponentName, "ip_restrictions", "/api/webserver/ip-restrictions/{id}"),
    new ModuleDefinition("Logging","fa fa-pencil", LoggingComponentName, "logging","/api/webserver/logging/{id}"),
    new ModuleDefinition("Mime Maps", "fa fa-arrows-h", MimeMapsComponentName, "static_content", "/api/webserver/static-content/{id}"),
    new ModuleDefinition("Monitoring", "fa fa-medkit", MonitoringComponentName, "monitoring", "/api/webserver/monitoring/{id}"),
    new ModuleDefinition("Modules", "fa fa-th", ModulesComponentName, "modules", "/api/webserver/http-modules/{id}"),
    new ModuleDefinition("Response Compression", "fa fa-compress", CompressionComponentName, "response_compression", "/api/webserver/http-response-compression/{id}"),
    new ModuleDefinition("Request Filtering", "fa fa-filter", RequestFilteringComponentName, "request_filtering", "/api/webserver/http-request-filtering/{id}"),
    new ModuleDefinition("Response Headers", "fa fa-arrow-down", HttpResponseHeadersComponentName, "response_headers", "/api/webserver/http-response-headers/{id}"),
    new ModuleDefinition("Request Tracing", "fa fa-flag-o", RequestTracingComponentName, "request_tracing", "/api/webserver/http-request-tracing/{id}"),
    new ModuleDefinition("Static Content", "fa fa-file-o", StaticContentComponentName, "static_content", "/api/webserver/static-content/{id}"),
    new ModuleDefinition("Url Rewrite", "fa fa-exchange", UrlRewriteComponentName, "url_rewrite", "/api/webserver/url-rewrite/{id}")
]
