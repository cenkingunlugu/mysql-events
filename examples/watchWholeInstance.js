const MySQLEvents = require('@cenkingunlugu/mysql-events');

const program = async () => {
  const instance = new MySQLEvents({
    host: 'localhost',
    user: 'root',
    password: 'root',
  }, {
    startAtEnd: true,
  });

  await instance.start();

  instance.addTrigger({
    name: 'Whole database instance',
    expression: '*',
    statement: MySQLEvents.STATEMENTS.ALL,
    onEvent: (event) => {
      console.log(event);
    },
  });

  instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
  instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);
};

program()
  .then(() => console.log('Waiting for database vents...'))
  .catch(console.error);
