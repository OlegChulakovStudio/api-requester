# @CH/API
Обертка над axios для выполнения запросов к API

Утановка через npm

```
npm i ch-api
```

Пример использования в приложении

```
import CHRequest from "ch-api";

/** Запрос к АПИ. */
export default function request(method, url, options = {}) {
  const requestOptions = {
    ...options,
    baseURL: '/api',
  };

  return CHRequest(method, url, requestOptions)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // Логгер на случай ошибки API
      console.error(
        "Error API::\n",
        `${method.toUpperCase()} ${url}`,
        `BASE_URL: ${requestOptions.baseURL}\n`,
        "Request: ",
        options.data,
        "\n",
        "Response: ",
        error
      );
      return Promise.reject(
        (error.response && error.response.data) || {
          message: 'Упс... Что то пошло не так.',
        }
      );
    });
}
```

Список опций

```
export interface Options {
  data: object;
  before: () => void;
  success: (response: Response) => void;
  error: (error: Error) => void;
  headers: object;
  baseURL: string;
}
```

### data

Объект передаваемых данных

### before, success, error

Функции колбэки для axios

### headers

Заголовки запроса

### baseURL

Адрес API