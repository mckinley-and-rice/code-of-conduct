Notes 
./apache2/mods-available/mpm_prefork.conf
./apache2/mods-available/mpm_prefork.conf

<IfModule mpm_prefork_module>
    StartServers             5
    MinSpareServers          15
    MaxSpareServers         28
    MaxRequestWorkers      2800
    MaxConnectionsPerChild   1000
</IfModule>
