# Google Play Console Compliance Guide for Nebula Dash

**Developer**: AppsQuery  
**App**: Nebula Dash  
**Version**: 1.0.0  
**Date**: October 29, 2025

---

## Critical Steps to Avoid Account Termination

### 1. Complete App Information

#### Basic Information

- **App Name**: Nebula Dash
- **Short Description**: Navigate your spaceship through cosmic obstacles and collect stardust in this exciting endless runner!
- **Full Description**: See STORE_LISTING.md
- **Category**: Games > Arcade
- **Tags**: Space Game, Endless Runner, Casual, Offline Game, Family Friendly

#### Developer Information

- **Developer Name**: AppsQuery
- **Email**: support@appsquery.com (MUST be a valid, monitored email)
- **Website**: [Your official website]
- **Physical Address**: [Complete business address - REQUIRED]
- **Phone**: [Optional but recommended]

### 2. Data Safety Section (CRITICAL)

Complete the Data Safety questionnaire in Google Play Console:

**Does your app collect or share any user data?**

- Answer: **NO**

**Data types you collect (if any):**

- High scores: Stored locally only, not transmitted
- No personal information
- No location data
- No financial data
- No device IDs

**Data usage:**

- Not shared with third parties
- Not used for advertising
- Not used for analytics
- Users can delete by uninstalling

Reference: See DATA_SAFETY.md for complete declarations

### 3. Privacy Policy (REQUIRED)

**Upload privacy policy:**

1. Host PRIVACY_POLICY.md on your website
2. OR use GitHub Pages: https://[yourusername].github.io/nebula-dash/privacy
3. Add the URL to Google Play Console
4. Privacy policy MUST be accessible from app (add Settings menu)

### 4. Content Rating

Complete the IARC content rating questionnaire:

**Violence**: None
**Sexual Content**: None
**Language**: None
**Drugs**: None
**Gambling**: None
**User Interaction**: None (offline game)
**Shares User Info**: No
**Shares Location**: No
**Digital Purchases**: No

Expected Rating: **Everyone (E)**

### 5. Target Audience

**Select age groups:**

- [x] Ages 5 and under
- [x] Ages 6-8
- [x] Ages 9-12
- [x] Ages 13-17
- [x] Ages 18+

**Target audience and content declaration:**

- App is suitable for all ages
- No ads directed at children
- COPPA compliant (no data from children)

### 6. Store Listing Assets

Create and upload:

#### Icon (512x512 PNG)

- Original design
- No copyrighted characters
- Clear, professional quality
- Represents the app accurately

#### Feature Graphic (1024x500)

- Original artwork
- No misleading imagery
- Represents actual gameplay
- High quality

#### Screenshots (Minimum 2, maximum 8)

- Actual app screenshots
- No mockups or template images
- Show real gameplay
- High resolution
- Different game states

#### Optional: Promo Video

- Show actual gameplay
- No misleading content
- Professional quality

### 7. App Content Declarations

#### Ads

- **Contains Ads**: NO
- If you add ads later, update this immediately

#### In-App Purchases

- **Offers In-App Purchases**: NO
- If you add IAP later, update this immediately

#### Made for Kids

- **Target children**: NO (all ages, but not specifically for children)
- If targeting kids specifically, additional requirements apply

#### News Apps

- **Is this a news app**: NO

#### COVID-19 Contact Tracing/Status

- **Is this app related to COVID-19**: NO

#### Data Safety

- Complete all sections accurately (see DATA_SAFETY.md)

#### Government App

- **Is this a government app**: NO

### 8. APK/AAB Requirements

#### App Bundle (Recommended)

- Use Android App Bundle (.aab) format
- Enables smaller downloads
- Required for new apps

#### Minimum Requirements

- Target API Level: 33 (Android 13) or higher
- Support 64-bit architecture
- ProGuard/R8 enabled for release builds

### 9. App Quality Guidelines

#### Crashes and ANRs

- **Crash Rate**: Must be < 1.09%
- **ANR Rate**: Must be < 0.47%
- Test thoroughly before release

#### Performance

- App must start within 5 seconds
- Smooth gameplay (60 FPS recommended)
- Efficient battery usage
- Minimal storage footprint

#### Design Quality

- Follow Material Design guidelines
- Proper Android navigation patterns
- Support different screen sizes
- Landscape and portrait orientation support

### 10. Security and Trust

#### App Signing

- Use Google Play App Signing (recommended)
- Keep your keystore secure
- Don't lose your signing key

#### Deceptive Behavior Prevention

- ✅ No fake buttons or misleading UI
- ✅ No impersonation of other apps
- ✅ No clickbait descriptions
- ✅ Honest feature representation

#### Malware Prevention

- ✅ No obfuscated code with malicious intent
- ✅ No unauthorized data collection
- ✅ No rooting or jailbreaking detection bypass
- ✅ Clean code, no suspicious network activity

### 11. Intellectual Property Compliance

#### Original Content

- ✅ All graphics are original
- ✅ Game concept is original
- ✅ No copyrighted characters or brands
- ✅ No trademarked names or logos
- ✅ Original music/sounds (or properly licensed)

#### Trademark Search

Before publishing, verify:

- "Nebula Dash" is not trademarked
- Graphics don't resemble existing games
- No similarity to popular brands

### 12. Pre-Launch Checklist

Before submitting:

- [ ] Privacy Policy uploaded and linked
- [ ] Terms of Service created
- [ ] Data Safety section completed accurately
- [ ] Content rating questionnaire completed
- [ ] Valid developer contact information
- [ ] High-quality store listing assets (all original)
- [ ] App tested on multiple devices
- [ ] No crashes or critical bugs
- [ ] All features work as described
- [ ] ProGuard enabled for release
- [ ] Signed with release keystore
- [ ] Version code and version name set correctly
- [ ] Minimum SDK and Target SDK appropriate
- [ ] All permissions justified (we use NONE)
- [ ] No hardcoded secrets or API keys
- [ ] Terms of Service linked in app

### 13. Post-Launch Monitoring

#### Monitor These Metrics

1. **Crash Reports**: Fix immediately
2. **ANR Reports**: Optimize performance
3. **User Reviews**: Respond professionally
4. **Policy Violations**: Address within 7 days
5. **Security Issues**: Critical - fix ASAP

#### Update Schedule

- Bug fixes: As needed
- Feature updates: Regular schedule
- Policy compliance updates: Immediate
- Security patches: Within 24-48 hours

### 14. Account Health Best Practices

#### Do's

- ✅ Respond to policy violation notices within 7 days
- ✅ Keep contact information current
- ✅ Monitor developer console regularly
- ✅ Update app to latest target SDK annually
- ✅ Maintain high app quality scores
- ✅ Respond to user reviews professionally
- ✅ Keep privacy policy and data safety current
- ✅ Test thoroughly before each update

#### Don'ts

- ❌ Copy other apps or games
- ❌ Use copyrighted material without permission
- ❌ Mislead users about app functionality
- ❌ Collect data without disclosure
- ❌ Ignore policy violation warnings
- ❌ Create multiple accounts if banned
- ❌ Upload repetitive or low-quality apps
- ❌ Use deceptive install tactics

### 15. High-Risk Behavior Prevention

Your previous account was terminated for "High Risk Behavior". To prevent this:

#### Pattern Recognition

Google flags accounts that show:

- Multiple policy violations
- Repeated similar violations
- Associated with previously banned accounts
- Suspicious patterns across apps
- User complaints and refunds
- Low-quality app submissions

#### Prevention Strategy

1. **Quality Over Quantity**: Focus on ONE high-quality app
2. **Original Content**: Never copy or clone
3. **Clear Communication**: Honest descriptions
4. **User Trust**: Respond to reviews, fix bugs
5. **Policy Compliance**: Read and follow ALL policies
6. **Professional Identity**: Legitimate business info
7. **No Shortcuts**: Build reputation organically

#### This App's Safety Features

- ✅ 100% original concept and design
- ✅ No data collection = no privacy concerns
- ✅ No ads = no ad policy violations
- ✅ No IAP = no payment issues
- ✅ Family-friendly = broader compliance
- ✅ Offline = no server/network issues
- ✅ Simple, honest functionality
- ✅ Professional presentation

### 16. Required App.json Updates

Ensure proper app configuration:

```json
{
  "expo": {
    "name": "Nebula Dash",
    "slug": "nebula-dash",
    "version": "1.0.0",
    "privacy": "public",
    "platforms": ["ios", "android"],
    "android": {
      "package": "com.appsquery.nebuladash",
      "versionCode": 1,
      "permissions": [],
      "adaptiveIcon": {
        "foregroundImage": "./assets/icon.png",
        "backgroundColor": "#000000"
      }
    },
    "extra": {
      "privacyPolicyUrl": "https://[your-website]/privacy-policy",
      "termsOfServiceUrl": "https://[your-website]/terms-of-service"
    }
  }
}
```

### 17. Developer Account Setup

#### Before Creating New Account

Since your previous account was banned:

1. **Wait Period**: Wait at least 90 days
2. **Different Identity**: Use different business/personal info
3. **Different Payment**: Different credit card
4. **Different Device**: Different computer/IP for registration
5. **Legitimate Business**: Register as a real business entity
6. **New Email**: Fresh email address not associated with old account
7. **Different Phone**: New phone number

⚠️ **WARNING**: Creating a new account too soon or with similar info WILL result in immediate ban

#### Account Registration Tips

- Use your real, verifiable business information
- Professional email (not free email services)
- Complete business address (physical location)
- Valid business phone number
- Business website (professional, active)
- Pay the $25 registration fee
- Verify your identity if requested

### 18. Communication with Google Play

If you receive a policy violation:

1. **Read Carefully**: Understand the exact violation
2. **Don't Panic**: You usually have 7-30 days to fix
3. **Fix Thoroughly**: Address the root cause
4. **Update Policy Docs**: Update privacy policy if needed
5. **Resubmit**: Follow instructions exactly
6. **Be Professional**: Polite, factual appeals only
7. **One Chance**: Appeals are often your only chance

### 19. Legal Requirements

#### Required Legal Documents

1. ✅ Privacy Policy (created)
2. ✅ Terms of Service (created)
3. ✅ COPPA compliance statement (in privacy policy)
4. ✅ GDPR compliance (data safety section)
5. [ ] EULA (optional for simple games)

#### Business Registration

- Register as legitimate business entity
- Get EIN/Tax ID
- Business bank account
- Professional business address
- Business email domain

### 20. Final Recommendations

#### For This App

1. Host privacy policy on professional website
2. Add "Settings" screen in app with links to privacy/terms
3. Create professional app icon (hire designer if needed)
4. Create quality screenshots from actual gameplay
5. Write honest, compelling app description
6. Test on 5+ different Android devices
7. Ensure 100% crash-free experience
8. Have someone else test and review
9. Double-check all Play Console fields
10. Submit for closed testing first (internal track)

#### Long-Term Success

1. Build one quality app at a time
2. Listen to user feedback
3. Regular updates and improvements
4. Build positive reputation
5. Eventually add more apps (if first succeeds)
6. Maintain strict policy compliance
7. Professional developer presence
8. Community engagement

---

## Resources

- **Google Play Policy Center**: https://play.google.com/about/developer-content-policy/
- **Developer Distribution Agreement**: https://play.google.com/about/developer-distribution-agreement.html
- **App Quality Guidelines**: https://developer.android.com/quality
- **Data Safety Help**: https://support.google.com/googleplay/android-developer/answer/10787469

---

## Contact for Questions

If you need clarification on any policy:

- Google Play Support: https://support.google.com/googleplay/android-developer/
- Developer Forums: https://support.google.com/googleplay/android-developer/community

---

**Remember**: One policy violation can lead to account termination. When in doubt, be MORE transparent and MORE compliant than required.

Good luck with your app launch! 🚀
