import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'
import {
  Building2,
  Calendar,
  CreditCard,
  Globe,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Truck,
  User,
} from 'lucide-react'

export const Route = createFileRoute('/legal-info')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container className="py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">
          Legal Information
        </h1>
        <h2 className="text-xl text-muted-foreground mb-4 text-balance">
          特定商取引に基づく表記
        </h2>
        <Badge variant="secondary" className="text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          更新日: 30/09/2024
        </Badge>
      </div>

      <div className="grid gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Building2 className="w-5 h-5" />
              会社情報
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    販売事業者
                  </dt>
                  <dd className="text-foreground font-medium">
                    Sierra Japan Enterprises LLC
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    代表者
                  </dt>
                  <dd className="flex items-center gap-2 text-foreground">
                    <User className="w-4 h-4 text-primary" />
                    ハラル シャナク ラジ
                  </dd>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    所在地
                  </dt>
                  <dd className="flex items-start gap-2 text-foreground">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    埼玉県さいたま市中央区大戸1-34-10
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    運営統括責任者
                  </dt>
                  <dd className="text-foreground">ハラル シャナク ラジ</dd>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Mail className="w-5 h-5" />
              連絡先
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Globe className="w-5 h-5 text-primary" />
                <div>
                  <dt className="text-xs font-medium text-muted-foreground">
                    ホームページ
                  </dt>
                  <dd className="text-sm text-foreground break-all">
                    <a
                      href="https://sastosulavexpress.com/"
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      sastosulavexpress.com
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <dt className="text-xs font-medium text-muted-foreground">
                    電子メール
                  </dt>
                  <dd className="text-sm text-foreground">
                    <a
                      href="mailto:jbaral@sierrajapan.com"
                      className="hover:text-primary transition-colors"
                    >
                      jbaral@sierrajapan.com
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <dt className="text-xs font-medium text-muted-foreground">
                    TEL
                  </dt>
                  <a href="tel:0488653396">
                    <dd className="text-sm text-foreground font-mono">
                      048 865 3396
                    </dd>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <CreditCard className="w-5 h-5" />
              販売価格・お支払い
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-muted-foreground mb-2">
                販売価格
              </dt>
              <dd className="text-foreground">
                本サイト上で表示されている表示価格で販売しております。
              </dd>
            </div>
            <Separator />
            <div>
              <dt className="text-sm font-medium text-muted-foreground mb-2">
                商品代金以外に必要な費用
              </dt>
              <dd className="text-foreground">
                送料（999円〜2,948円）、消費税
              </dd>
            </div>
            <Separator />
            <div>
              <dt className="text-sm font-medium text-muted-foreground mb-2">
                お支払方法とお支払いの時期
              </dt>
              <dd className="text-foreground">注文確定後、Cash on delivery</dd>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Truck className="w-5 h-5" />
              商品等の引き渡し・発送方法
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-muted-foreground mb-2">
                商品等の引き渡し時期
              </dt>
              <dd className="text-foreground">
                ご注文から5営業日以内に発送します
              </dd>
            </div>
            <Separator />
            <div>
              <dt className="text-sm font-medium text-muted-foreground mb-2">
                発送方法
              </dt>
              <dd className="text-foreground">宅配便</dd>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <RotateCcw className="w-5 h-5" />
              返品の取扱条件・返品期限、返品時の送料負担
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">
                ■通常の返品について
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                商品発送後の返品・交換キャンセルには、基本的に対応しておりません。商品に欠陥がある場合のみ交換が可能ですので、ご連絡ください。商品に欠陥がある場合は、弊社で負担いたします。それ以外は、お客さまのご負担になります。
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">
                ■代引き換えの受取拒否による返品について
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                特段正当な理由無く、代引き受取拒否・受取期限切れなどの事由により商品が返送されてきた場合、往復送料及び代引手数料・梱包資材料・返金利息（商品代金の5%）に加え下記の諸経費をお支払いいただきます
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>− 内容証明発行にかかる行政書士手数料＝５００円程度</li>
                <li>− 内容証明発行料＝８００円程度</li>
                <li>− 簡易裁判の手数料、簡易弁護料など諸費＝３万円程度</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}
