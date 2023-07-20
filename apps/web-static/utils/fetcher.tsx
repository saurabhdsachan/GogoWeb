const APIBaseUrl = process.env.NEXT_PUBLIC_BACKEND_HOST;

const fetcher = async (url: string, options?: any) => {
  const resp = await fetch(`${APIBaseUrl}${url}`, {
    method: options?.method || 'GET',
    mode: 'cors', // cors, no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options?.method !== 'GET' && { body: JSON.stringify(options?.body) }),
  });

  if (resp?.status <= 300) {
    return {
      status: resp?.status,
      statusText: resp?.statusText,
      data: await resp?.json(),
    };
  } else {
    return {
      status: resp?.status,
      statusText: resp?.statusText,
    };
  }
};

export default fetcher;
