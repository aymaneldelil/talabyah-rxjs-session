export function AutoUnsubscribe() {
  return function (constructor: any) {
    console.log('FROM DECORATOR : constructor , ', constructor);

    // Get a reference to the original ngOnDestroy function of the component/service
    const original = constructor.prototype.ngOnDestroy;

    // Override the ngOnDestroy function of the component/service
    constructor.prototype.ngOnDestroy = function () {
      // Loop through all properties of the component/service
      for (const prop in this) {
        const property = this[prop];
        // Check if the property is a subscription
        console.log('property ', property);

        if (property && typeof property.unsubscribe === 'function') {
          // Call the unsubscribe function to unsubscribe from the subscription

          console.log('Before unsubscribe ', property);
          property.unsubscribe();
          console.log('After unsubscribe ', property);
        }
      }

      original?.apply(this, arguments);
    };
  };
}
