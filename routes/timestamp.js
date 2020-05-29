const router = require('express').Router();

router.get('/timestamp/:date_string?', (req, res) => {
  const { date_string } = req.params;

  // if @date_string is a valid date String pass it into Date constructor
  // if @date_string is a unix timestamp convert it to integer before passing
  // if @date_string is empty use current date
  const date = !date_string
    ? new Date()
    : date_string.includes('-')
    ? new Date(date_string)
    : new Date(Number(date_string));

  // if date is invalid
  if (!date.getTime()) return res.send({ error: 'Invalid Date' });

  res.send({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

module.exports = router;
