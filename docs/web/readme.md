# ZNPM: Private npm registry for Zillow

<div class="sync" style="display:none;">
  <h3>Sync Status</h3>
  <p id="sync-model"></p>
  <p>Last sync time is <span id="last-sync-time"></span>. </p>
  <p class="syncing alert alert-info">The sync worker is working in the background. </p>
  <table class="sync-status">
    <tbody>
      <tr>
        <td><span id="need-sync"></span> packages need to be synced</td>
        <td class="syncing"><span id="left-sync"></span> packages and dependencies waiting for sync</td>
        <td><span id="percent-sync"></span>% progress</td>
      </tr>
      <tr>
        <td><span id="success-sync"></span> packages and dependencies successfully synced</td>
        <td><span id="fail-sync"></span> packages and dependencies sync failed</td>
        <td>last success: <span id="last-success-name"></span></td>
      </tr>
    </tbody>
  </table>
</div>


## Getting Started

Install the package from [http://registry.znpm.oc.zillow.local](http://registry.znpm.oc.zillow.local). When installing a package or version does not exist in our local registry, it will try to install from the official registry([registry.npmjs.org](http://registry.npmjs.org)), and sync this package to znpm in the backend.

```
$ npm install -g cnpm
```

Alias the package.  It's recommended that you set this in your user config file so you only have
to do it once, e.g. .zshrc

```
$ alias znpm='cnpm --registry=http://registry.znpm.oc.zillow.local --registryweb=http://znpm.oc.zillow.local --disturl=http://nodejs.org/dist --cache=$HOME/.znpm/.cache --userconfig=$HOME/.znpmrc'
```

Add yourself as a user:
```
$ znpm adduser
```

This will give you the ability to publish private packages under the following scopes:
```
@irv
@sea
@lin
@nyc
@van
@sfo
```

## Syncing
Not all public packages will be available in ZNPM.  In order to sync a package run the following command (replace mypackage with the name of the package you want znpm to add):
```
$ znpm sync mypackage
```
Additionally, from the webview you can type in the search the package name and click the link "Sync".

## Packages

To define the scope the package is to be published under you add the scope under the name tag in "packages.json":
```
{
  "name": "@irv/mypackage"
}
```

Install a package:
```
$ znpm install @irv/mypackage
```
Require a package:
```
{
  "dependencies": {
    "@irv/mypackage": "0.0.1"
  }
}
```
## Maintainers

Adding another maintainer to the package to publish future versions from the root of the project run the following command (replace joelt with the user you'd like to add):
```
$ znpm owner add joelt
```

## Version Badge

Default style is `flat-square`.

Badge URL: `http://znpm.oc.zillow.local/badge/v/cnpmjs.org.svg` ![cnpmjs.org-badge](http://znpm.oc.zillow.local/badge/v/cnpmjs.org.svg)

* `<0.1.0 & >=0.0.0`: ![red-badge](https://img.shields.io/badge/cnpm-0.0.1-red.svg?style=flat-square)
* `<1.0.0 & >=0.1.0`: ![red-badge](https://img.shields.io/badge/cnpm-0.1.0-green.svg?style=flat-square)
* `>=1.0.0`: ![red-badge](https://img.shields.io/badge/cnpm-1.0.0-blue.svg?style=flat-square)

## Registry


* Our private register: [http://registry.znpm.oc.zillow.local](http://registry.znpm.oc.zillow.local), syncing from [registry.npmjs.org](http://registry.npmjs.org)
* CNPM public registry: [r.cnpmjs.org](http://r.cnpmjs.org), syncing from [registry.npmjs.org](http://registry.npmjs.org)
* Current [cnpmjs.org](/) version: <span id="app-version"></span>

<table class="downloads">
  <tbody>
    <tr>
      <td class="count" id="total-packages"></td><td>total packages</td>
      <td class="count" id="total-versions"></td><td>total package versions</td>
      <td class="count" id="total-deletes"></td><td>total deleted packages</td>
    </tr>
    <tr>
      <td class="count"></td><td> downloads today</td>
      <td class="count"></td><td> downloads this week</td>
      <td class="count"></td><td> downloads this month</td>
    </tr>
    <tr>
      <td class="count"></td><td> downloads - last day</td>
      <td class="count"></td><td> downloads - last week</td>
      <td class="count"></td><td> downloads - last month</td>
    </tr>
  </tbody>
</table>

Running on [Node.js](http://nodejs.org), version <span id="node-version"></span>.

<script src="/js/readme.js"></script>