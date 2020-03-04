FROM atomist/sdm-base:0.4.1

COPY package.json package-lock.json ./
RUN npm ci \
    && npm cache clean --force

COPY . ./

USER atomist:atomist
