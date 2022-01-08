#import "RCTRfidModule.h"
#import <React/RCTLog.h>

@implementation RCTRfidModule
{
  bool hasListeners;
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(login:(NSString *)name location:(NSString *)location) {
  RCTLog(name);
  RCTLog(location);
}
                                                                                      
@end



