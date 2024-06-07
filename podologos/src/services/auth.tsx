interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "fjsdiopfj23ioprui039wfjsefsdçl",
        user: {
          name: "Felipe",
          email: "felipe.cassano@gmail.com",
        },
      });
    }, 2000);
  });
}
