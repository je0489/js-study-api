const SHOWING_MSG = "안녕하세요장지은입니당";

export const generator = (req, res) => {
  const {
    params: { page },
    headers: { origin },
  } = req;
  const msg = SHOWING_MSG.match(/.{1,3}/g);
  const data = msg[page - 1];
  const hasNextPage = msg[page] !== undefined;

  const allowedOrigins = process.env.CLIENT_URL.split(";");
  if (allowedOrigins.includes(origin))
    res.setHeader("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Credentials", true);
  return res.json({ data, hasNextPage });
};
