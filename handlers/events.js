

module.exports = async (req) => {
  const { client, fs, path, cwd } = req;

  let events_path = path.join(cwd, 'events');

  const event_files = fs.readdirSync(events_path).map(v => path.join(events_path, v));

  event_files.forEach(file => {
    const event = require(file);
    let eventName = file.split('.')[1].split(/\/|\\/igm);
    eventName = eventName[0]

    console.log(`Registering Event: ${eventName}`);

    client.on(eventName, event.bind(null, req));

  });

};
