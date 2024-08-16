import Foundation

@objc public class CameraCap: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
