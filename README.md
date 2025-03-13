# kibanaSearchLogger

Плагин для Kibana

---

## Разработка

См. [руководство по разработке Kibana](https://github.com/elastic/kibana/blob/main/CONTRIBUTING.md) для настройки среды разработки.

## Скрипты

<dl>
  <dt><code>yarn kbn bootstrap</code></dt>
  <dd>Устанавливает зависимости (node_modules) и настраивает их в плагине и в Kibana</dd>

  <dt><code>yarn plugin-helpers build</code></dt>
  <dd>Создаёт дистрибутивную версию плагина для установки в Kibana</dd>
</dl>

## Установка и запуск

Для запуска плагина:  

- **Клонируйте репозиторий Kibana**  
- **Скопируйте файлы плагина** в папку `plugins`  
- **Установите зависимости**:  
  ```sh
  yarn kbn bootstrap
- **Авторизуйтесь**: логин `elastic` пароль `changeme`
- **Сбилдить** плагин можно командой `yarn build` с указанием версии
