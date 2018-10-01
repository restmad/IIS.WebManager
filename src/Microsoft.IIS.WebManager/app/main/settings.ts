export var SETTINGS : { [key:string]: string} = {
    "version": "2.2.2",
    "api_version": "2.2.0",
    "api_setup_version": "2.2.0",
    "api_download_url": "http://go.microsoft.com/fwlink/?LinkId=829373",
    "ga_track": "UA-XXXXXXXX-X",
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
export const FilesComponentName = "FilesComponent"
export const UploadComponentName = "UploadComponent"
export const WarningComponentName = "WarningComponent"
export const AppModuleName = "AppModule"

export class ComponentReference {
    constructor(public name: string, public ico: string, public component_name: string, public api_name: string, public api_path: string) {}
}

export const FilesComponentReference: ComponentReference = new ComponentReference("Files", "fa fa-files-o", FilesComponentName, "files", "/api/webserver/url-rewrite/{id}")

export var GLOBAL_MODULES = [
    new ComponentReference("Web Sites", "fa fa-globe", WebSiteListComponentName, "websites", "/api/webserver/websites?application_pool.id={appPoolId}"),
    new ComponentReference("Application Pools", "fa fa-cogs", AppPoolComponentName, "app_pools", "/api/webserver/application-pools"),
    new ComponentReference("Files", "fa fa-files-o", WebFilesComponentName, "files", "/api/webserver/files/{id}"),
    new ComponentReference("Web Applications", "fa fa-code", WebAppListComponentName, "webapps", "/api/webserver/webapps?website.id={websiteid}&application_pool.id={apppoolid}"),
    new ComponentReference("Virtual Directories", "fa fa-folder-o", VdirListComponentName, "vdirs", "/api/webserver/virtual-directories?website.id={siteId}&webapp.id={appId}"),
    new ComponentReference("Authentication", "fa fa-sign-in", AuthenticationComponentName, "authentication", "/api/webserver/authentication/{id}"),
    new ComponentReference("Authorization", "fa fa-user-o", AuthorizationComponentName, "authorization", "/api/webserver/authorization/{id}"),
    new ComponentReference("Certificates", "fa fa-lock", CertificatesComponentName, "certificates", "/api/certificates"),
    new ComponentReference("Central Certificate Store", "fa fa-certificate", CentralCertificateComponentName, "central_certificates", "/api/webserver/centralized-certificates/{id}"),
    new ComponentReference("Default Documents", "fa fa-file-text-o", DefaultDocumentsComponentName, "default_document", "/api/webserver/default-documents/{id}"),
    new ComponentReference("Directory Browsing", "fa fa-folder-open-o", DirectoryBrowsingComponentName, "directory_browsing", "/api/webserver/directory-browsing/{id}"),
    new ComponentReference("IP Restrictions", "fa fa-ban", IpRestrictionsComponentName, "ip_restrictions", "/api/webserver/ip-restrictions/{id}"),
    new ComponentReference("Logging","fa fa-pencil", LoggingComponentName, "logging","/api/webserver/logging/{id}"),
    new ComponentReference("Mime Maps", "fa fa-arrows-h", MimeMapsComponentName, "static_content", "/api/webserver/static-content/{id}"),
    new ComponentReference("Monitoring", "fa fa-medkit", MonitoringComponentName, "monitoring", "/api/webserver/monitoring/{id}"),
    new ComponentReference("Modules", "fa fa-th", ModulesComponentName, "modules", "/api/webserver/http-modules/{id}"),
    new ComponentReference("Response Compression", "fa fa-compress", CompressionComponentName, "response_compression", "/api/webserver/http-response-compression/{id}"),
    new ComponentReference("Request Filtering", "fa fa-filter", RequestFilteringComponentName, "request_filtering", "/api/webserver/http-request-filtering/{id}"),
    new ComponentReference("Response Headers", "fa fa-arrow-down", HttpResponseHeadersComponentName, "response_headers", "/api/webserver/http-response-headers/{id}"),
    new ComponentReference("Request Tracing", "fa fa-flag-o", RequestTracingComponentName, "request_tracing", "/api/webserver/http-request-tracing/{id}"),
    new ComponentReference("Static Content", "fa fa-file-o", StaticContentComponentName, "static_content", "/api/webserver/static-content/{id}"),
    new ComponentReference("Url Rewrite", "fa fa-exchange", UrlRewriteComponentName, "url_rewrite", "/api/webserver/url-rewrite/{id}")
]
