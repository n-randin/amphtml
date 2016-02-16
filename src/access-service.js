/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {getElementService, getElementServiceIfAvailable} from
    './custom-element';


/**
 * Returns a promise for the Access service.
 * @param {!Window} win
 * @return {!Promise<!AccessService>}
 */
export function accessServiceFor(win) {
  return getElementService(win, 'access', 'amp-access');
}

/**
 * Returns a promise for the Access service or a promise for null if the service
 * is not available on the current page.
 * @param {!Window} win
 * @return {!Promise<?AccessService>}
 */
export function accessServiceForOrNull(win) {
  return getElementServiceIfAvailable(win, 'access', 'amp-access');
}
