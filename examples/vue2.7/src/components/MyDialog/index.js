/**
 * @Author: longmo
 * @Date: 2025-03-30 15:26:53
 * @LastEditTime: 2025-03-30 16:02:52
 * @FilePath: examples/vue2.7/src/components/index.js
 * @Description: create 创建一个基础弹窗
 */
import { create } from 'vue-nice-modal';
import _MyDialog from './MyDialog.vue';

export const MyDialog = create(_MyDialog);
