<!--
 * @Author: longmo
 * @Date: 2025-03-30 15:13:16
 * @LastEditTime: 2025-03-30 16:37:34
 * @FilePath: examples/vue2.7/src/components/MyDialog/MyDialog.vue
 * @Description:
 -->

<template>
  <el-dialog
    :title="title"
    :visible="modal.visible.value"
    width="30%"
    @close="handleCancel"
  >
    <span>这是一段信息 {{ content }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script setup>
import { useModal } from 'vue-nice-modal';

const modal = useModal();
defineProps(['title', 'content']);

const handleCancel = () => {
  modal.reject('cancel');
  modal.hide();
};

const handleConfirm = () => {
  modal.resolve('confirm');
  modal.hide();
};
</script>

<!--<script >-->
<!--import { useModal } from 'vue-nice-modal';-->
<!--export default {-->
<!--  name: 'MyDialog',-->
<!--  props: {-->
<!--    title: String,-->
<!--    content: String,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      modal: useModal(),-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    handleCancel() {-->
<!--      this.modal.reject('cancel');-->
<!--      this.modal.hide();-->
<!--    },-->
<!--    handleConfirm() {-->
<!--      this.modal.resolve('confirm');-->
<!--      this.modal.hide();-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<style scoped></style>
