export class UtilsHelper {

  public static formatUrl(url: string): string {
    return url.includes('://') ? url : `http://${url}`;
  }

}
