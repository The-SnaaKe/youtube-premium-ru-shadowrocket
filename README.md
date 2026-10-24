# YouTube Premium RU for Shadowrocket

Модуль Shadowrocket для фильтрации рекламных запросов YouTube, PiP и фонового воспроизведения.

## Установка

Добавьте модуль в Shadowrocket по прямой ссылке:

`https://raw.githubusercontent.com/The-SnaaKe/youtube-premium-ru-shadowrocket/main/YT-Premium-V1-RU-Optimized.module`

Для обработки HTTPS-запросов и ответов включите HTTPS-дешифровку Shadowrocket и установите/доверяйте его сертификату.

## Параметры

В аргументах модуля можно настроить блокировку загрузок и immersive-вкладок, а также язык субтитров и текстов песен.

## Примечания

- Модуль блокирует QUIC/UDP для доменов YouTube, чтобы запросы проходили через HTTPS-фильтры.
- Скрипт обработки ответов загружается из проекта Maasea и может обновляться отдельно.
- YouTube регулярно меняет API, поэтому работа зависит от версии приложения.
