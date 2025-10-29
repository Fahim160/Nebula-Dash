# Google Play Upload Checklist

## ✅ Pre-Upload Requirements

### 1. App Bundle Generation

- [ ] Build production APK/AAB
- [ ] Sign with release keystore
- [ ] Enable ProGuard/R8 code shrinking
- [ ] Test on multiple devices
- [ ] Verify no crashes or bugs

### 2. Required Documents (Already Created ✅)

- [x] Privacy Policy (PRIVACY_POLICY.md)
- [x] Terms of Service (TERMS_OF_SERVICE.md)
- [x] Data Safety information (DATA_SAFETY.md)
- [x] Store Listing content (STORE_LISTING.md)
- [x] Compliance guide (GOOGLE_PLAY_COMPLIANCE.md)

### 3. Host Legal Documents

**CRITICAL**: Before uploading, you MUST:

- [ ] Create a website or GitHub Pages
- [ ] Upload PRIVACY_POLICY.md to your website
- [ ] Upload TERMS_OF_SERVICE.md to your website
- [ ] Get public URLs for both documents
- [ ] Update app.json with actual URLs
- [ ] Test URLs to ensure they're accessible

**Example URLs**:

```
https://yourdomain.com/privacy-policy
https://yourdomain.com/terms-of-service
```

**OR GitHub Pages**:

```
https://yourusername.github.io/nebula-dash/privacy
https://yourusername.github.io/nebula-dash/terms
```

### 4. Create Graphics Assets

#### App Icon (512x512 PNG)

- [ ] Design professional icon
- [ ] No copyrighted elements
- [ ] Clear and recognizable
- [ ] Represents the game

#### Feature Graphic (1024x500 PNG)

- [ ] Create eye-catching banner
- [ ] Show game concept
- [ ] Include game title
- [ ] Professional quality

#### Screenshots (Min 2, Max 8)

- [ ] Take actual app screenshots
- [ ] Show different game states
- [ ] High resolution
- [ ] No mockups

Tools: Figma, Canva, Adobe Illustrator, or hire on Fiverr

### 5. Developer Account Setup

⚠️ **IMPORTANT**: Since your previous account was terminated:

#### Wait Period

- [ ] Wait at least 90 days from termination
- [ ] Use different personal/business information
- [ ] Different payment method
- [ ] Different device for registration

#### New Account Information

- [ ] New Google account (never linked to old account)
- [ ] Different credit/debit card
- [ ] Legitimate business name
- [ ] Real physical address
- [ ] Professional business email (not Gmail)
- [ ] Business phone number
- [ ] Business website (required)

#### Verification Documents (May be Required)

- [ ] Government-issued ID
- [ ] Business registration documents
- [ ] Proof of address
- [ ] Tax information (W-9 or equivalent)

### 6. Build Commands

```bash
# Navigate to project
cd "/Users/Drives/Drive-D/Personal/Cosmic Collector/NebulaDash"

# Install dependencies
npm install

# For Android AAB (Google Play)
eas build --platform android --profile production

# OR local build
npx expo run:android --variant release
```

### 7. Google Play Console Steps

#### A. Create Application

1. Go to Google Play Console
2. Click "Create app"
3. Fill in app details:
   - **App name**: Nebula Dash
   - **Default language**: English (United States)
   - **App/Game**: Game
   - **Free/Paid**: Free

#### B. Store Presence

**Main store listing**:

- [ ] App name: Nebula Dash
- [ ] Short description (80 chars): Copy from STORE_LISTING.md
- [ ] Full description (4000 chars): Copy from STORE_LISTING.md
- [ ] App icon (512x512)
- [ ] Feature graphic (1024x500)
- [ ] Screenshots (2-8 images)
- [ ] Category: Games > Arcade
- [ ] Tags: space, arcade, runner, casual

#### C. App Content

**Privacy Policy**:

- [ ] Add your hosted privacy policy URL
- [ ] REQUIRED - app will be rejected without this

**App Access**:

- [ ] Select "All or some functionality is restricted"
- [ ] OR "All functionality is available without restrictions"

**Ads**:

- [ ] Select "No, my app does not contain ads"

**Content Rating**:

- [ ] Complete IARC questionnaire
- [ ] Answer all questions honestly
- [ ] Expected rating: Everyone (E)

**Target Audience**:

- [ ] Select all age groups (5+, 6-8, 9-12, 13-17, 18+)
- [ ] Not specifically designed for children

**News Apps**:

- [ ] Select "No"

**COVID-19 Contact Tracing**:

- [ ] Select "No"

**Data Safety**:

- [ ] **Does your app collect or share data**: NO
- [ ] If users can request data deletion: YES (uninstall app)
- [ ] Review DATA_SAFETY.md for detailed answers

**Government Apps**:

- [ ] Select "No"

#### D. Store Settings

**App Details**:

- [ ] Developer name: AppsQuery
- [ ] Contact email: support@appsquery.com (verified)
- [ ] Phone: [Optional]
- [ ] Website: [Your website]
- [ ] External marketing: No (unless you plan to advertise)

**Internal Testing** (Recommended First):

- [ ] Create internal testing track
- [ ] Add test users (your email addresses)
- [ ] Upload APK/AAB
- [ ] Test for 1-2 weeks

#### E. Release

**Production Release**:

- [ ] Create production release
- [ ] Upload signed AAB
- [ ] Release notes (copy from STORE_LISTING.md)
- [ ] Rollout percentage: Start with 10-20%
- [ ] Monitor for crashes/issues
- [ ] Increase rollout gradually

### 8. Post-Upload Monitoring

**First 48 Hours**:

- [ ] Check for policy violation emails
- [ ] Monitor crash reports
- [ ] Watch user reviews
- [ ] Check install/uninstall rates

**First Week**:

- [ ] Respond to reviews
- [ ] Fix any reported bugs
- [ ] Monitor performance metrics

**First Month**:

- [ ] Maintain <1% crash rate
- [ ] Keep ANR rate low
- [ ] Update if needed
- [ ] Build positive reputation

### 9. Common Rejection Reasons & Prevention

#### Privacy Policy Issues

- ✅ Hosted online (accessible URL)
- ✅ Links from app (Settings screen)
- ✅ Matches actual app behavior

#### Misleading Content

- ✅ Honest app description
- ✅ Accurate screenshots
- ✅ No false claims

#### Intellectual Property

- ✅ Original graphics
- ✅ Original game concept
- ✅ No copyrighted material

#### Data Safety

- ✅ Accurate declarations
- ✅ No hidden data collection
- ✅ Transparent about all data use

#### Malicious Behavior

- ✅ Clean code
- ✅ No hidden functionality
- ✅ No unauthorized actions

### 10. Final Verification Before Submit

Run through this checklist:

- [ ] Privacy policy URL works and is correct
- [ ] Terms of service URL works
- [ ] Support email is valid and monitored
- [ ] App icon is high quality and original
- [ ] Screenshots are from actual app
- [ ] Description is honest and accurate
- [ ] Data safety section is complete
- [ ] Content rating is submitted
- [ ] App builds and runs without crashes
- [ ] Tested on at least 3 different devices
- [ ] No policy violations present
- [ ] Developer account is verified
- [ ] Payment information is added
- [ ] All required fields filled

### 11. Build & Sign Instructions

#### Option 1: Expo EAS Build (Recommended)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure build
eas build:configure

# Build for Play Store
eas build --platform android --profile production
```

#### Option 2: Local Build

```bash
# Generate Android build
npx expo prebuild --platform android

# Build release
cd android
./gradlew bundleRelease

# AAB will be at:
# android/app/build/outputs/bundle/release/app-release.aab
```

### 12. Emergency Contacts

If your app gets rejected:

1. Read the rejection email carefully
2. Understand the specific violation
3. Fix the issue completely
4. Respond professionally to the appeal
5. Update all relevant documentation
6. Resubmit only when fully compliant

**Support Resources**:

- Google Play Support: https://support.google.com/googleplay/android-developer
- Developer Forums: https://support.google.com/googleplay/android-developer/community
- Policy Center: https://play.google.com/about/developer-content-policy/

---

## ⚠️ CRITICAL WARNINGS

1. **DO NOT** create multiple developer accounts - instant ban
2. **DO NOT** copy other apps or games - policy violation
3. **DO NOT** use copyrighted material - legal issues
4. **DO NOT** mislead users about functionality
5. **DO NOT** collect data without disclosure
6. **DO NOT** ignore policy violation notices
7. **DO NOT** rush the process - take time to do it right

## ✅ Success Indicators

Your app is ready to upload when:

- ✅ All legal documents are hosted online
- ✅ All graphics are original and professional
- ✅ App runs perfectly on multiple devices
- ✅ Zero crashes in testing
- ✅ Privacy/terms accessible from app
- ✅ Data safety accurately reflects app behavior
- ✅ Store listing is honest and compelling
- ✅ Developer account is verified and legitimate

---

**Good luck with your launch! Take your time, follow all guidelines, and build a reputation for quality.** 🚀
