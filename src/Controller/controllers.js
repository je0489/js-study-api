const SHOWING_MSG = "안녕하세요장지은입니당";

export const generator = (req, res) => {
  const msg = SHOWING_MSG.match(/.{1,3}/g);
  const {
    params: { page },
  } = req;
  const data = msg[page - 1];
  const hasNextPage = msg[page] !== undefined;
  res.header({
    "Access-Control-Allow-Origin": `${process.env.CLIENT_URL}`,
    "Access-Control-Allow-Credentials": true,
  });
  return res.json({ data, hasNextPage });
};
