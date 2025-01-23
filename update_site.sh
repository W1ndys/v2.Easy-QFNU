#!/bin/bash

# 设置工作目录
WORK_DIR="/tmp/v2easy-temp"
TARGET_DIR="/opt/1panel/apps/openresty/openresty/www/sites/v2easy-qfnu.top/index"
REPO_URL="https://github.com/W1ndys/v2.Easy-QFNU.git"
PROXY_URL="https://ghfast.top/https://github.com/W1ndys/v2.Easy-QFNU.git"

# 清理可能存在的旧临时目录
rm -rf "$WORK_DIR"

# 创建临时工作目录
mkdir -p "$WORK_DIR"

# 进入工作目录
cd "$WORK_DIR" || exit 1

# 克隆函数
clone_repo() {
    local url=$1
    echo "正在尝试克隆仓库: $url"
    git clone --depth 1 --branch gh-pages "$url" . &> /dev/null
    return $?
}

# 先尝试直接克隆
echo "正在使用直接连接克隆..."
if ! clone_repo "$REPO_URL"; then
    echo "直接克隆失败，尝试使用代理..."
    if ! clone_repo "$PROXY_URL"; then
        echo "克隆失败，请检查网络连接或代理设置"
        exit 1
    fi
    echo "使用代理克隆成功"
else
    echo "直接克隆成功"
fi

# 确保目标目录存在
mkdir -p "$TARGET_DIR"

# 复制文件到目标目录
echo "正在更新网站文件..."
cp -rf ./* "$TARGET_DIR/"

# 设置适当的权限
echo "正在设置权限..."
chown -R 1000:1000 "$TARGET_DIR"
chmod -R 644 "$TARGET_DIR"  # 文件权限设为644
find "$TARGET_DIR" -type d -exec chmod 755 {} \;  # 目录权限设为755

# 清理临时文件
echo "正在清理临时文件..."
cd / && rm -rf "$WORK_DIR"

echo "更新完成！" 