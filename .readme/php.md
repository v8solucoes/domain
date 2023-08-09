## Install APACHE
https://dev.to/jonyhayama/meu-ambiente-para-desenvolvimento-web-com-wsl2-apache-mysql-php-wordpress-23of
`sudo apt update ` 
`sudo apt install apache2`
`sudo service apache2 start`
`sudo service apache2 restart`

## Install PHP APACHE
`sudo apt install php libapache2-mod-php php-mysql`
Instale o binário FPM-CGI para uso com o Nginx:
`sudo apt install php8.2 php8.2-fpm php8.2-mysql`
#Desinstalar
`sudo add-apt-repository ppa:ondrej/php -r -y`
`sudo apt remove --autoremove php8.2 libapache2-mod-php8.2 php8.2-*`

## Habilitar .htaccess
`sudo a2enmod rewrite`
Edite o arquivo /etc/apache2/sites-available/000-default.conf e procure pela linha DocumentRoot /var/www/html.

Adicione a regra para o diretório:

<Directory "/var/www/html">
    AllowOverride All
</Directory>
Não se esqueça de restartar o apache após aplicar as configurações:

sudo service apache2 restart

## Install NGINX
[Ref] (https://www.treinaweb.com.br/blogcriando-um-ambiente-de-desenvolvimento-php-com-wsl)
`sudo apt-get update`
`sudo apt-get install nginx`
`sudo service nginx restart`
nginx {start|stop|restart|reload|force-reload|status|configtest|rotate|upgrade}

## Ferifique se porta 80 está ocupado pelo PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 80).OwningProcess
Se estiver ocupada precisa parar, ou vai funcionar.
Depois acesse http://localhost/

## Instalar PHP
 `sudo add-apt-repository ppa:ondrej/php` Adicionar Repositório
 `sudo apt update` Atualizar Gerenciado de Pacote

Instale o binário FPM-CGI para uso com o Nginx:
`sudo apt install php8.2 php8.2-fpm php8.2-mysql`

Desinstalar PHP e derivado.
`sudo add-apt-repository ppa:ondrej/php -r -y`
`sudo apt remove --autoremove php8.2 libapache2-mod-php8.2 php8.2-*`

#Sem url amigável
http://www.webdesignemfoco.com/artigos.php?categoria=sites&&pagina=1

#Com url amigável
http://www.webdesignemfoco.com/artigos/sites/1

.HTACCESS
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^parametros-([0-9]+)-(.*)$ parametros.php?id=$1&&categoria=$2
HTML
<div><img src="sapato.jpg" alt="sapato"></div>
<div><a href="parametros.php?id=1&&categoria=mocacin">Sapato Mocacin</a></div>
PHP
$id=$_GET['id'];
$categoria=$_GET['categoria'];

REFERENCIA https://www.webdesignemfoco.com/cursos/php/passando-parametros-php-atraves-de-url-s-amigaveis

echo "Esse produto possui id={$id} e categoria={$categoria}";

Criar um Arquivo index.php

`sudo vim /var/www/html/index.php`

LIBERAR PERMISSÕES DE EDIÇÃO
`sudo chown -R emerson html` (abra o dirtétório cd /var/www/)

Conteúdo Arquivo

```php 
<a href="home.php">Test Link</a>
<?php

echo "<h1>PHP 8 no Nginx</h1>";

phpinfo();

?>```

## CONFIGURAR PHP COM NGINX
`sudo vim /etc/nginx/sites-available/default`

> Apague tudo e cole:

```server {
    listen 80;
    listen [::]:80;
 
    root /var/www/html;
    index index.php index.html index.htm;
 
    server_name _;
 
    location / {
        try_files $uri $uri/ =404;
    }
 
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
    }
}```

Depois Teste a configuração se não tem nada errado e restart os serviços:

`nginx -t`
`systemctl restart nginx php8.2-fpm`
URLS AMIGÁVES

Ajudas
https://blog.remontti.com.br/7413
https://www.treinaweb.com.br/blog/criando-um-ambiente-de-desenvolvimento-php-com-wsl
https://hcode.com.br/blog/nginx-com-php-8-no-servidor-ubuntu




