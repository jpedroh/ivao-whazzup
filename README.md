# ivao-whazzup
A lib for getting and parsing IVAO Whazzup data.

## Installation 
```sh
npm install ivao-whazzup --save
yarn add ivao-whazzup
```

## Usage
The function `fetchData()` will restore data from the IVAO Whazzup file.

### Javascript
```javascript
const { Whazzup } = require('ivao-whazzup');
Whazzup.fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### TypeScript
```typescript
import { Whazzup } from 'ivao-whazzup';
Whazzup.fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## The return
The function `fetchData()` returns a `Promise` with an instance of `WhazzupRequestResult`, which contains:
```json
{
  "data": "IWhazzupRequestData",
  "pilots": "WhazzupPilot[]",
  "atcs": "WhazzupATC[]"
}
```
Please refer to the [models] (https://github.com/jpedroh/ivao-whazzup/tree/master/src/models) directory to be aware of the structure of each client. The `data` object, has the following structure, respecting the `IWhazzupRequestData` interface.
```json
{
  "lastUpdate": "Date",
  "connectedClients": "number",
  "retrievedClients": "number"
}
```

## Errors
There are 3 instances of errors.

### `DownloadFileError`
Will be thrown every time there's a problem downloading the Whazzup file.

### `ParseError`
Will be thrown every time there's a problem parsing the `gzip` file. Please be aware that `.txt` download is not supported, since it's asked by the IVAO docs that the `.gzip` file has the priority due to bandwidth.

### `BuildModels`
Will be thrown every time that for some reason a problem occurs while building the clients models.