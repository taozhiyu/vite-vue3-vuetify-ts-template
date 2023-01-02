<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="font-weight-black text-center">
              <v-icon icon="mdi-vuetify"></v-icon>Vuetify View
            </h1>
            <v-col> vuetify 组件测试 </v-col>
            <div
              class="d-flex align-center justify-center my-6 bg-surface-variant flex-sm-row flex-column w-100"
            >
              <p>请给我评分：</p>
              <v-rating
                v-model="rating"
                bg-color="orange-lighten-1"
                color="blue"
                :size="$vuetify.display.xs ? 'small' : 'large'"
              ></v-rating>
            </div>

            <v-expansion-panels variant="accordion">
              <v-expansion-panel title="查看实时 breakpoint" elevation="1">
                <template v-for="(n, i) in $vuetify.display" :key="i">
                  <template v-if="['string', 'boolean'].includes(typeof n)">
                    <v-expansion-panel-text class="breakpoint">
                      $vuetify.display.{{ i }}: {{ n }}
                    </v-expansion-panel-text>
                  </template>
                </template>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
      <v-btn
        @click="toggleTheme"
        variant="outlined"
        size="large"
        icon
        color="info"
        class="theme"
      >
        <v-icon icon="mdi-theme-light-dark"></v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
const rating = ref(5);

const theme = useTheme();

const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
</script>
<style lang="scss" scoped>
.breakpoint :deep(.v-expansion-panel-text__wrapper) {
  padding: 2px 24px !important;
}
.theme {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}
.v-application {
  flex: 1;
  :deep(.v-application__wrap) {
    min-height: unset;
  }
}
</style>
