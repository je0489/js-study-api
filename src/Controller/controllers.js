export const generator = (_, res) => {
  const SHOWING_MSG = "안녕하세요장지은입니당";
  return res.json({ data: SHOWING_MSG });
};
