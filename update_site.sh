#!/bin/bash

# 设置工作目录
WORK_DIR="/tmp/v2easy-temp"
TARGET_DIR="/opt/1panel/apps/openresty/openresty/www/sites/v2easy-qfnu.top/index"
REPO_URL="https://github.com/W1ndys/v2.Easy-QFNU.git"
PROXY_URL="https://ghfast.top/https://github.com/W1ndys/v2.Easy-QFNU.git"
TIMEOUT=10  # 设置超时时间（秒）

# 清理可能存在的旧临时目录
rm -rf "$WORK_DIR"

# 创建临时工作目录
mkdir -p "$WORK_DIR"

# 克隆函数
clone_repo() {
    local url=$1
    echo "正在尝试克隆仓库: $url"
    
    # 使用timeout命令限制git克隆时间
    if timeout $TIMEOUT git clone --depth 1 --branch gh-pages "$url" "$WORK_DIR" 2>/dev/null; then
        if [ -d "$WORK_DIR/.git" ]; then
            return 0
        fi
    fi
    return 1
}

# 清理函数
cleanup() {
    echo "正在清理..."
    rm -rf "$WORK_DIR"
    exit 1
}

# 设置trap捕获中断信号
trap cleanup INT TERM

# 先尝试直接克隆
echo "正在使用直接连接克隆..."
if ! clone_repo "$REPO_URL"; then
    echo "直接克隆失败或超时，尝试使用代理..."
    if ! clone_repo "$PROXY_URL"; then
        echo "克隆失败，请检查网络连接或代理设置"
        cleanup
    fi
    echo "使用代理克隆成功"
else
    echo "直接克隆成功"
fi

# 检查克隆是否成功
if [ ! -d "$WORK_DIR" ] || [ -z "$(ls -A $WORK_DIR)" ]; then
    echo "克隆失败或目录为空"
    cleanup
fi

# 确保目标目录存在
mkdir -p "$TARGET_DIR"

# 复制文件到目标目录
echo "正在更新网站文件..."
cp -rf "$WORK_DIR"/* "$TARGET_DIR/" || {
    echo "复制文件失败"
    cleanup
}

# 设置适当的权限
echo "正在设置权限..."
chown -R 1000:1000 "$TARGET_DIR"
chmod -R 644 "$TARGET_DIR"  # 文件权限设为644
find "$TARGET_DIR" -type d -exec chmod 755 {} \;  # 目录权限设为755

# 清理临时文件
echo "正在清理临时文件..."
rm -rf "$WORK_DIR"

echo "更新完成！" 