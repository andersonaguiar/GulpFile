#!/bin/bash

type gulp >/dev/null 2>&1 || {
  sudo npm i -g gulp;
}

type browser-sync >/dev/null 2>&1 || {
  sudo npm i -g browser-sync;
}

type esformatter >/dev/null 2>&1 || {
  sudo npm i -g esformatter;
}

type compass >/dev/null 2>&1 || {
  sudo gem install compass;
}

type scss-lint >/dev/null 2>&1 || {
  sudo gem install scss-lint;
}
