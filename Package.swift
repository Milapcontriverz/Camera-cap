// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Camera",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "Camera",
            targets: ["CameraCapPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CameraCapPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CameraCapPlugin"),
        .testTarget(
            name: "CameraCapPluginTests",
            dependencies: ["CameraCapPlugin"],
            path: "ios/Tests/CameraCapPluginTests")
    ]
)