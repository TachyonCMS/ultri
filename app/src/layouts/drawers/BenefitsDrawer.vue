<template>
  <q-list bordered>
    <q-item-label header class="text-h6">Features and Benefits</q-item-label>
    <q-separator></q-separator>
    <q-expansion-item group="benefits" icon="code" label="Open Source">
      <q-card class="bg-drawer-paper">
        <q-card-section >
          All of our code is open source and available on
          <a href="https://github.com/TachyonCMS/tachyoncms" class="nolink"
            >GitHub</a
          >.
          <ul>
            <li>Fork and customize the code.</li>
            <li>Run your own server.</li>
            <li>Contribute enhancements.</li>
            <li>Build apps for the marketplace.</li>
            <li>Support open source development.</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator></q-separator>

    <q-expansion-item group="benefits" icon="mdi-lead-pencil" label="Better Blogging">
      <q-card class="bg-drawer-paper">
        <q-card-section>
          <p>Dedicated to a building a better blogging experience.</p>
          <ul>
            <li>Feature rich editor.</li>
            <li>Multimedia components.</li>
            <li>FAST static serving.</li>
            <li>Multiple domains.</li>
            <li>Bring Your Own Domain.</li>
            <li>Custom color or dark theme.</li>
            <li>Publish in multiple languages.</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator></q-separator>

    <q-expansion-item
      group="benefits"
      icon="mdi-web"
      label="Static Site Generator"
    >
      <q-card class="bg-drawer-paper">
        <q-card-section>
          <p>
            Static sites are optimal for speed and SEO. Each website pages has
            the same features as a blog page.
          </p>
          <ul>
            <li>Easily define site structure.</li>
            <li>Customize menus and drawers.</li>
            <li>Publish to our global CDN.</li>
            <li>Download the generated site.</li>
            <li>1 Click app installation.</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator></q-separator>

    <q-expansion-item
      group="benefits"
      icon="mdi-monitor-off"
      label="Headless CMS"
    >
      <q-card class="bg-drawer-paper">
        <q-card-section>
          <p>
            Sometimes its all about the data, for that we support headless mode.
          </p>
          <ul>
            <li>Create your own custom models.</li>
            <li>Define content and relationships.</li>
            <li>High-performance edge caching.</li>
            <li>Pre-define custom queries for performance.</li>
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
      <q-card class="bg-drawer-paper">
        <q-card-section>
          <p>Manage local content with zero installation.</p>
          <ul>
            <li>Unlimited local projects.</li>
            <li>Local projects are free.</li>
            <li>HMR for easy development.</li>
            <li>Crazy fast builds.</li>
            <li>Powerful configuration manager</li>
          </ul>
          <p class="text-caption text-italic">
            * Requires latest Chrome browser.
          </p>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator></q-separator>

    <q-expansion-item
      group="benefits"
      icon="mdi-tools"
      label="Best-in-Class Tools"
    >
      <q-card class="bg-drawer-paper">
        <q-card-section>
          <p>
            Built on top of the best, cutting edge web technolgies and tools.
          </p>
          <ul>
            <li>Quasar 2 / Vue 3</li>
            <li>AWS Amplify and AWS Services</li>
            <li>Editor.js</li>
            <li>JSON Editor</li>
            <li>Built-in camera and screen tools.</li>
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
