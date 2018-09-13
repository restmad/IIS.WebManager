export var SETTINGS : { [key:string]: string} = {
    "version": "2.2.2",
    "api_version": "2.2.0",
    "api_setup_version": "2.2.0",
    "api_download_url": "http://go.microsoft.com/fwlink/?LinkId=829373",
    "ga_track": "UA-XXXXXXXX-X",
}

export class ModuleDefinition {
    constructor(public name: string, public ico: string, public component_name: string, public module: string, public api_name: string, public api_path: string) {}
}

export var GLOBAL_MODULES: ModuleDefinition[] = [
    new ModuleDefinition("Web Sites", "fa fa-globe", "WebSiteListComponent", "app/webserver/websites/websites.module#WebSitesModule", "websites", "/api/webserver/websites?application_pool.id={appPoolId}"),
    new ModuleDefinition("Application Pools", "fa fa-cogs", "AppPoolListComponent", "app/webserver/app-pools/app-pools.module#AppPoolsModule", "app_pools", "/api/webserver/application-pools"),
    new ModuleDefinition("Files", "fa fa-files-o", "WebFilesComponent", "app/webserver/files/webfiles.module#WebFilesModule", "files", "/api/webserver/files/{id}"),
    new ModuleDefinition("Web Applications", "fa fa-code", "WebAppListComponent", "app/webserver/webapps/webapps.module#WebAppsModule", "webapps", "/api/webserver/webapps?website.id={websiteid}&application_pool.id={apppoolid}"),
    new ModuleDefinition("Virtual Directories", "fa fa-folder-o", "VdirListComponent", "app/webserver/vdirs/vdirs.module#VdirsModule", "vdirs", "/api/webserver/virtual-directories?website.id={siteId}&webapp.id={appId}"),
    new ModuleDefinition("Authentication", "fa fa-sign-in", "AuthenticationComponent", "app/webserver/authentication/authentication.module#AuthenticationModule", "authentication", "/api/webserver/authentication/{id}"),
    new ModuleDefinition("Authorization", "fa fa-user-o", "AuthorizationComponent", "app/webserver/authorization/authorization.module#AuthorizationModule", "authorization", "/api/webserver/authorization/{id}"),
    new ModuleDefinition("Certificates", "fa fa-lock", "CertificatesComponent", "app/certificates/certificates.module#CertificatesModule", "certificates", "/api/certificates"),
    new ModuleDefinition("Central Certificate Store", "fa fa-certificate", "CentralCertificateComponent", "app/webserver/central-certificates/central-certificate.module#CentralCertificateModule", "central_certificates", "/api/webserver/centralized-certificates/{id}"),
    new ModuleDefinition("Default Documents", "fa fa-file-text-o", "DefaultDocumentsComponent", "app/webserver/default-documents/default-documents.module#DefaultDocumentsModule", "default_document", "/api/webserver/default-documents/{id}"),
    new ModuleDefinition("Directory Browsing", "fa fa-folder-open-o", "DirectoryBrowsingComponent", "app/webserver/directory-browsing/directory-browsing.module#DirectoryBrowsingModule", "directory_browsing", "/api/webserver/directory-browsing/{id}"),
    new ModuleDefinition("IP Restrictions", "fa fa-ban", "IpRestrictionsComponent", "app/webserver/ip-restrictions/ip-restrictions.module#IpRestrictionsModule", "ip_restrictions", "/api/webserver/ip-restrictions/{id}"),
    new ModuleDefinition("Logging","fa fa-pencil","LoggingComponent","app/webserver/logging/logging.module#LoggingModule","logging","/api/webserver/logging/{id}"),
    new ModuleDefinition("Mime Maps", "fa fa-arrows-h", "MimeMapsComponent", "app/webserver/mime-maps/mime-maps.module#MimeMapsModule", "static_content", "/api/webserver/static-content/{id}"),
    new ModuleDefinition("Monitoring", "fa fa-medkit", "MonitoringComponent", "app/webserver/monitoring/monitoring.module#MonitoringModule", "monitoring", "/api/webserver/monitoring/{id}"),
    new ModuleDefinition("Modules", "fa fa-th", "ModulesComponent", "app/webserver/modules/modules.module#ModulesModule", "modules", "/api/webserver/http-modules/{id}"),
    new ModuleDefinition("Response Compression", "fa fa-compress", "CompressionComponent", "app/webserver/compression/compression.module#CompressionModule", "response_compression", "/api/webserver/http-response-compression/{id}"),
    new ModuleDefinition("Request Filtering", "fa fa-filter", "RequestFilteringComponent", "app/webserver/request-filtering/request-filtering.module#RequestFilteringModule", "request_filtering", "/api/webserver/http-request-filtering/{id}"),
    new ModuleDefinition("Response Headers", "fa fa-arrow-down", "HttpResponseHeadersComponent", "app/webserver/http-response-headers/http-response-headers.module#HttpResponseHeadersModule", "response_headers", "/api/webserver/http-response-headers/{id}"),
    new ModuleDefinition("Request Tracing", "fa fa-flag-o", "RequestTracingComponent", "app/webserver/request-tracing/request-tracing.module#RequestTracingModule", "request_tracing", "/api/webserver/http-request-tracing/{id}"),
    new ModuleDefinition("Static Content", "fa fa-file-o", "StaticContentComponent", "app/webserver/static-content/static-content.module#StaticContentModule", "static_content", "/api/webserver/static-content/{id}"),
    new ModuleDefinition("Url Rewrite", "fa fa-exchange", "UrlRewriteComponent", "app/webserver/url-rewrite/url-rewrite.module#UrlRewriteModule", "url_rewrite", "/api/webserver/url-rewrite/{id}")
]
