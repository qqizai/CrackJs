#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/8/9 10:07
# @Author   : qizai
# @File     : learn_cv2.py
# @Software : PyCharm

# encoding:utf-8
import cv2 as cv
import numpy as np


# 对滑块进行二值化处理
def handle_img1(image):
  kernel = np.ones((8, 8), np.uint8) # 去滑块的前景噪声内核
  gray = cv.cvtColor(image, cv.COLOR_BGR2GRAY)
  width, heigth = gray.shape
  for h in range(heigth):
    for w in range(width):
      if gray[w, h] == 0:
        gray[w, h] = 96
  cv.imshow('gray', gray)
  binary = cv.inRange(gray, 96, 96)
  res = cv.morphologyEx(binary, cv.MORPH_OPEN, kernel) # 开运算去除白色噪点
  cv.imshow('res', res)
  return res


# 模板匹配(用于寻找缺口有点误差)
def template_match(img_target, img_template):
  tpl = handle_img1(img_template) # 误差来源就在于滑块的背景图为白色
  blurred = cv.GaussianBlur(img_target, (3, 3), 0) # 目标图高斯滤波
  gray = cv.cvtColor(blurred, cv.COLOR_BGR2GRAY)
  ret, target = cv.threshold(gray, 127, 255, cv.THRESH_BINARY) # 目标图二值化
  cv.imshow("template", tpl)
  cv.imshow("target", target)
  method = cv.TM_CCOEFF_NORMED
  width, height = tpl.shape[:2]
  result = cv.matchTemplate(target, tpl, method)
  min_val, max_val, min_loc, max_loc = cv.minMaxLoc(result)
  print(min_val, max_val, min_loc, max_loc)
  left_up = max_loc
  right_down = (left_up[0] + height, left_up[1] + width)
  cv.rectangle(img_target, left_up, right_down, (0, 0, 255), 2)
  cv.imshow('res', img_target)


if __name__ == '__main__':
  img0 = cv.imread('img_big.png')
  img1 = cv.imread('target.png')

  template_match(img0, img1)
  cv.waitKey(0)
  cv.destroyAllWindows()



