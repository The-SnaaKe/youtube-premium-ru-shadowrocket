# YouTube Premium RU for Shadowrocket

Оптимизированный модуль Shadowrocket для фильтрации рекламы YouTube, PiP и фонового воспроизведения.

## Установка

Добавьте удалённый модуль в Shadowrocket по прямой ссылке:

`https://raw.githubusercontent.com/The-SnaaKe/youtube-premium-ru-shadowrocket/main/YT-Premium-V1-RU-Optimized.module`

Для обработки HTTPS-ответов включите HTTPS-дешифровку Shadowrocket и установите/доверяйте его сертификату.

## Параметры

В редакторе аргументов модуля можно изменить блокировку загрузок, immersive-вкладок и Shorts, а также язык субтитров и текстов песен.

## Примечания

- Модуль блокирует QUIC/UDP для доменов YouTube, чтобы трафик проходил через HTTPS-фильтры.
- Скрипт ответа загружается с upstream-проекта Maasea и может обновляться независимо от этого репозитория.
- YouTube регулярно меняет API, поэтому работа может зависеть от версии приложения.
