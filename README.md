# ivao-whazzup

[![npm version](https://badge.fury.io/js/ivao-whazzup.svg)](https://badge.fury.io/js/ivao-whazzup)

A simple library for retrieving IVAO Whazzup data.

## Installation

```sh
npm install ivao-whazzup
yarn add ivao-whazzup
```

## Usage

Before you begin, you must first build the object using the provided builder.

```typescript
import IvaoWhazzupBuilder from 'ivao-whazzup'

const ivaoWhazzup = IvaoWhazzupBuilder.build()
```

After that, you're good to go, and all you need to do is call the function `fetchData()` which will restore data from the IVAO Whazzup file.

```typescript
import IvaoWhazzupBuilder from 'ivao-whazzup'

const ivaoWhazzup = IvaoWhazzupBuilder.build()
ivaoWhazzup
  .fetchData()
  .then(console.log)
  .catch(console.error)
```

### Customizing the File Contents Provider

By default this library will retrieve the Whazzup File hosted at IVAO API: `https://api.ivao.aero/getdata/whazzup/whazzup.txt`. However, for some reason, you might need to use another implementation, e.g.: retrieving contents from file system.

In order to do that `IvaoWhazzupBuilder` exposes `overridingFileContentsProvider` method, which allows you to easily switch your provider to another implementation of `FileContentsProvider` interface. So, supposing you have the following implementation:

```typescript
class MyFileContentsProvider implements FileContentsProvider {
  public getFileLines(): Promise<string[]> {
    // Here I do my specific logic to retrieve file contents
  }
}
```

And then, do:

```typescript
import IvaoWhazzupBuilder from 'ivao-whazzup'

const ivaoWhazzup = IvaoWhazzupBuilder.overridingFileContentsProvider(
  new MyFileContentsProvider()
).build()
ivaoWhazzup
  .fetchData()
  .then(console.log)
  .catch(console.error)
```

## Use terms

Refer to [IVAO Regulations D.4](https://doc.ivao.aero/rules2:regulations#devops)

> D.4 Whazzup usage (live network data)
>
> 1. Whazzup is not any longer subject for an approval issued by DEVOPs. Whazzup feed is free to use for everyone.
> 2. Whazzup feed is provided as plain text file.
> 3. To reduce data load, this file is served as gzip-compressed archive and must be handled on the users end accordingly.
> 4. The maximum refresh time of the Whazzup feed is once per 3 minutes.
> 5. If DEVOPs detects a refresh rate shorter than 3 minutes, DEVOPs reserves the right to ban the source IP address requesting Whazzup feed temporarily or permanently.
