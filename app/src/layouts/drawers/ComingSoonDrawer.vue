<template>
  <q-list bordered>
    <q-item-label header class="text-h6">Coming Soon</q-item-label>
    <q-separator></q-separator>
    <q-expansion-item
      group="soon"
      icon="code"
      label="Open Source"
    >
      <q-card>
        <q-card-section>
          All of our code is open source and available on
          <a href="https://github.com/TachyonCMS/tachyoncms" class="nolink"
            >GitHub</a
          >.
          <ul>
            <li>Fork and customize the code.</li>
            <li>Run your own server.</li>
            <li>Support open source development.</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator></q-separator>

 <q-expansion-item
      group="benefits"
      icon="mdi-folder-multiple-plus-outline"
      label="Better Blogging"
    >
      <q-card>
        <q-card-section>
          <p>Dedicated to a building a better blogging experience.</p>
          <ul>
            <li>Feature rich editor.</li>
            <li>Multimedia components.</li>
            <li>FAST static serving.</li>
            <li>Multiple domain options.</li>
            <li>Bring Your Own Domain.</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator></q-separator>

    <q-expansion-item
      group="benefits"
      icon="mdi-folder-multiple-plus-outline"
      label="Local Project Support"
    >
      <q-card>
        <q-card-section>
          <p>Requires latest Chrome browser.</p>
          <ul>
            <li>Unlimited local projects.</li>
            <li>Local projects are free.</li>
            <li>HMR for easy development.</li>
            <li>Crazy fast builds.</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator></q-separator>

    <q-expansion-item
      group="benefits"
      icon="mdi-tools"
      label="Best-in-Class Tools"
    >
      <q-card>
        <q-card-section>
          <p>
            Built on top of the best, cutting edge web technolgies and
            tools.
          </p>
          <ul>
            <li>Quasar 2 / Vue 3</li>
            <li>AWS Amplify and AWS Services</li>
            <li>Editor.js</li>
            <li>JSON Editor</li>
          </ul>
          <p></p>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator></q-separator>

  </q-list>
</template>

<script setup>
</script>
